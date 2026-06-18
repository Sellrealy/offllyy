import { auth } from "./firebase-config.js";

import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

window.login = async function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    location.href = "dashboard.html";

  } catch (error) {
    alert(error.message);
  }
};