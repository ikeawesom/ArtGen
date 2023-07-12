"use client";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  Auth,
} from "firebase/auth";
import { useState } from "react";

import Alert from "@/components/utilities/Alert";

interface Props {
  email: string;
  password: string;
  auth: Auth;
}
export default function SignUp({ email, password, auth }: Props) {
  const [status, setStatus] = useState("");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      sendEmailVerification(user)
        .then(() => {
          // ...
          setStatus("success");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setStatus(`${errorMessage}`);
        });

      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      setStatus(`${errorMessage}`);
      // ..
    });
  const success_text = `"A verification email has been sent to your inbox:  ${email}.`;
  var error_msg = status;
  if (status.includes("too-many-requests")) {
    error_msg =
      "Too many requests has been sent from your current IP address. Please try again later.";
  }
  return (
    <Alert
      type={status === "success" ? "success" : "alert"}
      text={status === "success" ? success_text : error_msg}
    />
  );
}

// ============================ WORKING ON ============================ //
// "use client";

// import {
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
//   Auth,
// } from "firebase/auth";
// import { useEffect, useState } from "react";

// import Alert from "@/app/components/Alert";

// interface Props {
//   email: string;
//   password: string;
//   auth: Auth;
// }
// export default function SignUp({ email, password, auth }: Props) {
//   const [status, setStatus] = useState("");

//   function checkStatus(status: string) {
//     if (status === "Firebase: Error (auth/email-already-in-use).") {
//       return "This email is already registered. Log In instead?";
//     } else {
//       console.log(status);
//       const start = status.indexOf("(");
//       const end = status.indexOf(")");
//       const newStatus_str = status.substring(start, end);

//       const newStatus_lst = newStatus_str.split("-");

//       var newStatus_str2 = "";

//       newStatus_lst.forEach((char) => {
//         newStatus_str2 +=
//           char.charAt(0).toUpperCase + char.substring(1, char.length - 1) + " ";
//       });

//       return newStatus_str2.trimEnd();
//     }
//   }

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       sendEmailVerification(user)
//         .then(() => {
//           // ...
//           setStatus("success");
//         })
//         .catch((error) => {
//           const errorMessage = error.message;
//           setStatus(`${checkStatus(errorMessage)}`);
//         });

//       // ...
//     })
//     .catch((error) => {
//       const errorMessage = error.message;
//       setStatus(`${checkStatus(errorMessage)}`);
//       // ..
//     });
//   const success_text = `"A verification email has been sent to your inbox:  ${email}.`;

//   return (
//     <Alert
//       type={status === "success" ? "success" : "alert"}
//       text={status === "success" ? success_text : status}
//     />
//   );
// }
