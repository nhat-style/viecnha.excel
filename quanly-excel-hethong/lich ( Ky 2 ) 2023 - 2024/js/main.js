// validation form login
const inputUsername = document.querySelector(".input-login-username");
const inputId = document.querySelector(".input-login-id");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if ( inputUsername.value === "" || inputId.value === "" || inputPassword.value === "") {
    alert("Không thể để trống !");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.id === inputId.value &&
      user.password === inputPassword.value
    ) 
  {
      alert("Chào mừng Nhật");
      window.location.href = "congthongtin.html";
    }
    else {
      alert("Đăng Nhập Thất Bại , Vui Lòng Thử Lại !");
    }
  }
});