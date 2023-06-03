const emailInput = document.querySelector("#email");
const form = document.querySelector(".form");
const errorMsg = document.querySelector(".error");
const container = document.querySelector(".container");
const success = document.querySelector(".success");
const dismissBtn = document.querySelector(".dismiss");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateEmail()) {
    emailInput.value = "";
    container.style.display = "none";
    success.style.display = "block";
  }
});

function validateEmail() {
  if (!emailInput.value) {
    errorMsg.textContent = "Email cannot be empty";
    emailInput.style.borderColor = "red";
    emailInput.style.color = "red";
    emailInput.style.backgroundColor = "#FFE8E6";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput.value)) {
    errorMsg.textContent = "Valid email required";
    emailInput.style.borderColor = "red";
    emailInput.style.color = "red";
    emailInput.style.backgroundColor = "#FFE8E6";
  } else {
    errorMsg.textContent = "";
    emailInput.style.color = "#9294a0";
    emailInput.style.borderColor = "#9294a0";
    emailInput.style.backgroundColor = "#ffffff";
    return true;
  }
}

dismissBtn.addEventListener("click", () => {
  success.style.display = "none";
  container.style.display = "grid";
});
