#!/bin/bash

# Usage: bash runMasdrTabs.sh DEV|QA|UAT
ENV="$1"
if [ -z "$ENV" ]; then
  echo "❌ Please specify environment: DEV, QA, or UAT"
  exit 1
fi

# Determine npm command
case "${ENV^^}" in
  DEV) NPM_CMD="preview" ;;
  QA) NPM_CMD="previewqa" ;;
  UAT) NPM_CMD="previewuat" ;;
  *) echo "❌ Invalid environment"; exit 1 ;;
esac

BASE_DIR="$HOME/Desktop/project/masdr"

gnome-terminal \
  --tab --title="Hostservice" --working-directory="$BASE_DIR/Masdr-CX-Hostservice-Frontend" -- bash -lc "npm run $NPM_CMD; exec bash" \
  --tab --title="Configurationservice" --working-directory="$BASE_DIR/Masdr-CX-Configurationservice-Frontend" -- bash -lc "npm run $NPM_CMD; exec bash" \
  --tab --title="Interactionservice" --working-directory="$BASE_DIR/Masdr-CX-Interactionservice-Frontend" -- bash -lc "npm run $NPM_CMD; exec bash" \
  --tab --title="Agentservice" --working-directory="$BASE_DIR/Masdr-CX-Agentservice-Frontend" -- bash -lc "npm run $NPM_CMD; exec bash" \
  --tab --title="Callservice" --working-directory="$BASE_DIR/Masdr-CX-Callservice-Frontend" -- bash -lc "npm run $NPM_CMD; exec bash" \
  --tab --title="Chatservice" --working-directory="$BASE_DIR/Masdr-CX-Chatservice-Frontend" -- bash -lc "npm run $NPM_CMD; exec bash"
