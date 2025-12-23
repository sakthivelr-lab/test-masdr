// Agentservice

// callservice

// chatservice

// hostservice

// interactionservice

// signalservice

// Configurationservice

// chatservice-sdk

// callservice-sdk

// cd
// ==========================================================

// call service -> {} ------------

// import { useEffect } from "react";

// const useBackgroundPing = () => {
//   useEffect(() => {
//     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//     if (!isMobile) return;

//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         CALL_SDK.backgroundSendMessage({ status: true });
//       } else {
//         CALL_SDK.backgroundSendMessage({ status: false });
//       }
//     };

//     // ✅ Attach listener for tab visibility
//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     // ✅ Send ping every 1 minute while on mobile
//     const interval = setInterval(() => {
//       CALL_SDK.backgroundSendMessage({
//         status: true,
//         data: { ping: Date.now() },
//       });
//     }, 60000); // 1 minute

//     // Cleanup
//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//       clearInterval(interval);
//     };
//   }, []);
// };

// export default useBackgroundPing;

// ---------------------

//     "guestCustomerMeetLink": "https://cx-dev.masdr.org/customer
//     ?meet=eyJkYXRhIjp7ImFjdHVhbEN1c3RvbWVySWQiOjE0NjU1LCJpbnRlcmFjdGlvbklkIjoyMDM0MCwiY2FsbE1vZGUiOiJndWVzdF9jdXN0b21lciIsInNlcnZpY2VHcm91cElkIjo4MH0sInNpZ25hdHVyZSI6IjRXQ1QwN3pST3l3NTg1eVo3aDdSa2ZMSlJ2SXV6RTlVMXRGOTd0M1ZGLzQ9In0%3D"

// https://172.16.30.171:5173/customer?meet=eyJkYXRhIjp7ImFjdHVhbEN1c3RvbWVySWQiOjE0NjU1LCJpbnRlcmFjdGlvbklkIjoyMDM0MCwiY2FsbE1vZGUiOiJndWVzdF9jdXN0b21lciIsInNlcnZpY2VHcm91cElkIjo4MH0sInNpZ25hdHVyZSI6IjRXQ1QwN3pST3l3NTg1eVo3aDdSa2ZMSlJ2SXV6RTlVMXRGOTd0M1ZGLzQ9In0%3D

// guestCustomerMeetLink
// :
// "https://172.16.30.171:5173/customer?meet=%2B46zANemF92IIwNQ9GDypWj5%2BZ2LxTVy9lDvgROcPyZPRi1ztUMaGJRy6gNBBOS%2BP%2BTnylDoqUjRcQZvugpxugRew1vzbMV%2FAtAGhGXVFm%2FCAvFR9vS98kEa4%2BlYlrw44GEzGZa8kafL83noINwq6zs7O5f0d5CEi3%2FyukGgIJ8r%2BJkO3pg1Q695J%2F9PcGM%2B"

// guestCustomerMeetLink
// :

// guestCustomerMeetLink
// :
// "https://172.16.30.171:5173/customer?meet=%2B46zANemF92IIwNQ9GDypQeYGFxq%2BrfC8KGJI3LJQq0jgp91qPPdy474A129iddKKyNdkhQNTOqm6Vf7mLzH6XvD28Paj%2BQQYUkeUIPtIj8R%2F47f8vTDgINPf2nkDWmPj1MbauU0Fz9paf8gETFTPMVCUzA%2BKFwHL4dY%2Bo1TvZx7I%2BNC1fyQ8tNMEUtt%2FMxY"

// "
// https://172.16.30.171:5173/customer?meet=%2B46zANemF92IIwNQ9GDypWj5%2BZ2LxTVy9lDvgROcPyZPRi1ztUMaGJRy6gNBBOS%2BP%2BTnylDoqUjRcQZvugpxugRew1vzbMV%2FAtAGhGXVFm%2FCAvFR9vS98kEa4%2BlYlrw44GEzGZa8kafL83noINwq6zs7O5f0d5CEi3%2FyukGgIJ8r%2BJkO3pg1Q695J%2F9PcGM%2B"

// https://172.16.30.171:5173/customer?meet=%2B46zANemF92IIwNQ9GDypVO2DiBiJG4B3%2Fi%2Ff0ttHJFLAL1dbfndlImIwCVUdEWEJLTACxCLADK1YXFLrJFik7BZcgcb8CPpRwqlXEyAUcsIdNL2nWzJUqIGEl4PqFpK6iNskDRIFipXG09heuhMhs8Jp1%2FQPFO3AtRY8uBvXN%2BhuJKVRnydiyId3oW7P4aR

//      "guestCustomerMeetLink":

// {

//     "interactionId": 20360,
//     "customerId": 14685,
//     "customerName": "sakthi",
//     "nin": "1234567890",
//     "mobileNumber": "",
//     "email": null,
//     "serviceGroupId": 80,
//     "serviceGroupNameEnglish": "7Dev_Insurance Systems",
//     "serviceGroupNameArabic": "7Dev_أنظمة التأمين",
//     "agentId": 211,
//     "agentNameEnglish": "agent agent",
//     "agentNameArabic": "وكيل14 وكيل",
//     "lastInteractionDate": "08/09/2025 10:13 AM",
//     "lastInteractionServiceGroupNameEnglish": "7Dev_Insurance Systems",
//     "lastInteractionServiceGroupNameArabic": "7Dev_أنظمة التأمين",
//     "lastInteractionAgents": [
//         {
//             "agentIds": 211,
//             "lastInteractionAgentNamesEnglish": "agent agent",
//             "lastInteractionAgentNamesArabic": "وكيل14 وكيل"
//         }
//     ],
//     "isSignLanguage": 0,
//     "confidentialityAgreement": 1,
//     "userPreferredLanguage": "en",
//     "parentId": 80,
//     "mainTopic": null,
//     "summary": null,
//     "chatAttachments": [],
//     "guestCustomerMeetLink":
//     "https://cx-dev.masdr.org/customer?meet=

//     eyJkYXRhIjp7ImFjdHVhbEN1c3RvbWVySWQiOjE0Njg1LCJpbnRlcmFjdGlvbklkIjoyMDM2MCwiY2FsbE1vZGUiOiJndWVzdF9jdXN0b21lciIsInNlcnZpY2VHcm91cElkIjo4MH0sInNpZ25hdHVyZSI6ImlRc3RoU2hvMmE2bWNPRzYwbncrTlJTY1QyWGExdGNHRUordXVYWVBwN2s9In0%3D"
// }

// 172.16.30.171
// {
//     "interactionId": 20509,
//     "customerId": 14836,
//     "customerName": "sakthi",

//     "https://172.16.30.171:5173/customer?meet=%2B46zANemF92IIwNQ9GDypWrfuzxfeyOpWmFWTqiCg195Jchq%2FPKGLmw9lQ9ujN6XEp1gdtGfXBTqQ7MWlpaAoheK4bwcx%2B7DGqZVPMOVjNwZEM%2F%2FSyZo8dd5EAa5xamcyIYQa7Ij5AbwND7gLeUpzk17GiCrqnKt4NmoaQSbRlpvjFUNTo38Mt7G8Bp3clP0"
// }

// Unexpected Application Error!
// t is not a function
// TypeError: t is not a function
//     at Gu (https://172.16.30.171:5173/assets/index-CJ88nXQk.js:24:22443)
//     at or (https://172.16.30.171:5173/assets/index-CJ88nXQk.js:24:24143)
//     at Et (https://172.16.30.171:5173/assets/index-CJ88nXQk.js:24:41687)
//     at lc (https://172.16.30.171:5173/assets/index-

//     {
//     "status": 200,
//     "data": {
//         "interactionId": 20715,
//         "roomId": "68c27373-0000-78c2-0000-737313b5bf9f",
//         "roomLink": "xvi-vpba-kan"
//     },
//     "message": "Customer processed successfully."
// }

// {
//     "error": {
//         "status": 400,
//         "data": {},
//         "message": {
//             "arabic": "فشل التحويل - المستخدم غير متاح",
//             "english": "Transfer failed - the user is not available."
//         },
//         "error": true
//     }
// }

// .input-field.customerInput input:focus,.input-field.customerInput textarea:focus {
//     box-shadow: var(--green-shadow);
//     border-color: var(--green-bright)
// }

// {
//     "successMessages": [],
//     "errorMessages": [
//         {
//             "english": "Agent not found for ID: 199",
//             "arabic": "لم يتم العثور على العميل للمعرف: 199"
//         }
//     ]
// }
//  ~/Desktop/project/masdr/notes/updateENV.sh  DEV
//   GetUserListForAskToJoin();

console.log(finalUrl);

const GuestCustomer = () => {
  const devUrl =
    "https://cx-dev.masdr.org/customer?meet=%2B46zANemF92IIwNQ9GDypXaacOS7h3TMKH8A6eb6tVeslW9gsFqE4Y%2FrYeE5TAwQZpC2T8lhfkrrQ0GoBa%2B9%2BSBbhu3lPrm5lEBZgXvP3MZ0%2F%2F2h7HEmvWUAZwsz0643D0IhDzBID7hw4JlaKGZa0axNwqtpKmdNNxukjb4iuoGPQaL9QOOZKOgsDdhvf%2B8n";

  const localUrl = "http://127.0.0.1:5173/customer";

  // extract query params from devUrl
  const devParams = new URL(devUrl).search;

  // append them to localUrl

  const finalUrl = localUrl + devParams;
  console.log(finalUrl);
};

//  encryptAPIData: (data, licenseKey) => {
//     const lsKey = getLicenseKey();
//     const key = licenseKey || `${lsKey}${lsKey}${lsKey}`;
//     return window.CALL_SDK.encryptAPIData(JSON.stringify(data), key);
//   },

const encryptAPIData = (data, licenseKey) => {
  const lsKey = getLicenseKey();
  const key = licenseKey || `${lsKey}${lsKey}${lsKey}`;
  let s = encryptAPIDataSDK(data, key);
  console.log(s,'sakthi  vell encrypted data');
  return s;
  //   return window.CALL_SDK.encryptAPIData(JSON.stringify(data), key);
};

export const encryptAPIDataSDK = (data, encryptKey) => {
  try {
    const key = Cryptlib.getHashSha256(encryptKey, 32);
    return Cryptlib.encrypt(encodeURIComponent(data), key, APIIV);
  } catch (error) {
    return data;
  }
};
