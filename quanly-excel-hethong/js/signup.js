// validation form register and register user local storage
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputIdRegister = document.querySelector(".input-signup-id");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");

// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputIdRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("Không thể để trống !");
  } else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      id: inputIdRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Chỉnh Sửa Đăng Ký Thành Công !");
    window.location.href = "login.html";
  }
});