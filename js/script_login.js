const login_form = document.getElementById("login_form");
const loginBt = document.getElementById("loginBt");
// const loginErrorMsg = document.getElementById("login-error-msg");

loginBt.addEventListener("click", (event) => {
    const userId = login_form.login.inputId.value;
    const userPw = login_form.login.inputPw.value;
    let username = "distincta@gmail.com"
    let userpassword = 1111

    if (userId === username && userPw === userpassword) {
        alert("You have successfully logged in.");
        window.location = "13_4_index.html";
        return false;
    } else {
      alert("You Are Not Our Member");
    }
  }
);