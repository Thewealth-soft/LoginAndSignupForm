//***************Switch Option between Login and Sigup***********

const longinFieldEl = document.querySelector("#field1");
const signupFieldEl = document.querySelector("#field2");
const loginBtnEl = document.querySelector(".slide__login");
const signupBtnEl = document.querySelector(".slide__signup");

signupBtnEl.addEventListener("click", function clickBtn() {
  longinFieldEl.style.display = "none";
  signupFieldEl.style.display = "block";
});
loginBtnEl.addEventListener("click", function clickBtn() {
  longinFieldEl.style.display = "block";
  signupFieldEl.style.display = "none";
});

// *****************Show and Hide Password***************
const field = document.querySelector(".field");
function showHide(input) {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
}
field.addEventListener("click", (event) => {
  if (event.target.matches("#eye__toggle")) {
    const eyeToggleEl = event.target;
    const inputEl = eyeToggleEl.previousElementSibling;
    showHide(inputEl, eyeToggleEl);
  }
});

// ***************Show and Hide Password (first trial)*****************

// const toggleEl = document.querySelector("#eye__toggle");
// const passwordEl = document.querySelector("#myInput");

//   toggleEl.addEventListener("click", function onClick() {
//   if (passwordEl.type === "password") {
//     passwordEl.type = "text";
//   } else {
//     passwordEl.type = "password";
//   }
//   const passwordOneEl = document.querySelector("#myInput_1");

//   if (passwordOneEl.type === "password") {
//     passwordOneEl.type = "text";
//   } else {
//     passwordOneEl.type = "password";
//   }
//     this.classList.toggle("bi-eye");
//   })
