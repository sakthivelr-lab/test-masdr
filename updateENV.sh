#!/bin/bash

CONFIG_FILE="$HOME/Desktop/project/masdr/notes/envConfig.txt"

# Check for argument
if [ -z "$1" ]; then
  echo "❌ Please specify environment: DEV, QA, or UAT"
  echo "Usage: bash updateENV.sh DEV"
  exit 1
fi

TARGET_ENV="$1"

# Uppercase it just in case
TARGET_ENV="${TARGET_ENV^^}"

if [[ ! "$TARGET_ENV" =~ ^(DEV|QA|UAT)$ ]]; then
  echo "❌ Invalid environment: $TARGET_ENV"
  echo "Valid options: DEV, QA, UAT"
  exit 1
fi

if [ ! -f "$CONFIG_FILE" ]; then
  echo "❌ Config file not found: $CONFIG_FILE"
  exit 1
fi

current_file=""
collecting=false
buffer=""

while IFS= read -r line || [ -n "$line" ]; do
  # Detect fileUrl line
  if [[ $line == fileUrl:* ]]; then
    # If we were collecting a previous block, write it
    if [[ -n "$current_file" && -n "$buffer" ]]; then
      dir_path=$(dirname "$current_file")
      mkdir -p "$dir_path"
      echo "Updating $current_file ..."
      echo "$buffer" > "$current_file"
      buffer=""
    fi

    # Extract file path
    current_file=$(echo "$line" | sed -n 's/.*fileUrl:"\([^"]*\)".*/\1/p')
    current_file="${current_file/\/home\/sakthivel/$HOME}"
    collecting=false
    continue
  fi

  # Start collecting only if the line matches the target environment
  if [[ $line == ENV* ]]; then
    env_value=$(echo "$line" | cut -d '=' -f2 | tr -d '"')
    if [[ "$env_value" == "$TARGET_ENV" ]]; then
      collecting=true
    else
      collecting=false
    fi
    continue
  fi

  # Stop collecting on #start or #end
  if [[ $line == \#start* || $line == \#end* ]]; then
    if [[ -n "$current_file" && -n "$buffer" ]]; then
      dir_path=$(dirname "$current_file")
      mkdir -p "$dir_path"
      echo "Updating $current_file ..."
      echo "$buffer" > "$current_file"
      buffer=""
    fi
    collecting=false
    continue
  fi

  # Collect environment lines
  if [[ $collecting == true && $line == *=* ]]; then
    buffer+="$line"$'\n'
  fi

done < "$CONFIG_FILE"

# Write last block if needed
if [[ -n "$current_file" && -n "$buffer" ]]; then
  dir_path=$(dirname "$current_file")
  mkdir -p "$dir_path"
  echo "Updating $current_file ..."
  echo "$buffer" > "$current_file"
fiw

echo "✅ .env files updated for $TARGET_ENV environment successfully!"
