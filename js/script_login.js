const login_form = document.getElementById("login_form");
const loginBt = document.getElementById("loginBt");
const loginErrorMsg = document.getElementById("errorMsg");

loginBt.addEventListener("click", (event) => {
  event.preventDefault();
  const userId = login_form.inputId.value;
  const userPw = login_form.inputPw.value;
  let username = "distincta@gmail.com"
  let password = 1111

    if (username === "userId" && password === "userPw") {
        alert("You have successfully logged in.");
        location("13_4_index.html");
    } else {
      loginErrorMsg.style.opacity = 1;
    }
  }
);