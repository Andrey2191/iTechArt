const subscribeBtn = document.querySelector(".subscribe__button");
const inputName = document.querySelector(".input-name");
const inputEmail = document.querySelector(".input-email");
const menu = document.querySelector(".nav-btn");
const menuLinks = document.querySelector(".nav__links");

subscribeBtn.addEventListener("click", () => {
  if (inputName.value === "" || inputEmail.value === "") {
    alert("fill in the input fields");
  } else {
    alert(
      `${inputName.value}, you have subscribed. Your Email: ${inputEmail.value}`
    );
  }
  inputName.value = "";
  inputEmail.value = "";
});

menu.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
});
