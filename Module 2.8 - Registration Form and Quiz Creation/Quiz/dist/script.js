const form = document.forms.quiz;
const findX = document.querySelector(".findX");
const opt1 = document.querySelector(".opt1");
const opt2 = document.querySelector(".opt2");
const opt3 = document.querySelector(".opt3");
const parrot = document.querySelector(".parrot");
const eagle = document.querySelector(".eagle");
const penguin = document.querySelector(".penguin");
const crow = document.querySelector(".crow");
const option = document.getElementsByName("findX");
const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");

const setError = function (field) {
  field.classList.add("is-invalid");
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!findX.value) {
    setError(findX);
  }
  if (findX.value.toLowerCase() === "manila") {
    question1.classList.add("alert-success");
    document.querySelector(".correct").classList.remove("hidden");
  } else {
    question1.classList.add("alert-danger");
    setError(findX);
  }

  if (!opt1.checked && !opt2.checked && !opt3.checked) {
    question2.classList.add("alert-danger");
  } else if (opt1.checked) {
    document.querySelector(".option1").classList.add("alert-danger");
    document.querySelector(".correct1").classList.remove("hidden");
  } else if (opt2.checked) {
    document.querySelector(".option2").classList.add("alert-success");
    document.querySelector(".correct2").classList.remove("hidden");
  } else if (opt3.checked) {
    document.querySelector(".option3").classList.add("alert-danger");
    document.querySelector(".correct3").classList.remove("hidden");
  }

  if (!parrot.checked && !eagle.checked && !penguin.checked && !crow.checked) {
    question3.classList.add("alert-danger");
  } else if (parrot.checked && eagle.checked && crow.checked) {
    console.log(`correct answer`);
    question3.classList.add("alert-success");
    document.querySelector(".lastQuestion").classList.remove("hidden");
  } else {
    question3.classList.add("alert-danger");
  }
});
