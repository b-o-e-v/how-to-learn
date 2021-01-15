let form = document.getElementsByClassName("feedback__form")[0];
let logo = document.getElementsByClassName("feedback__logo")[0];
let closeForm = document.getElementsByClassName("feedback__close")[0];

logo.onclick = function OpenForm() {
  form.style.display = "block";
}

closeForm.onclick = function CloseForm() {
  form.style.display = "none";
}
