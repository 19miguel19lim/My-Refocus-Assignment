const heart = document.querySelectorAll(".heart");
const card = document.querySelectorAll(".card");
const cancel = document.querySelectorAll(".cancel");
const checked = document.querySelectorAll(".checked");

let isActive = false;
let isRead = false;

heart.forEach((e) =>
  e.addEventListener("click", function () {
    if (!isActive) {
      e.classList.add("active");

      isActive = true;
    } else {
      e.classList.remove("active");

      isActive = false;
    }
  })
);

cancel.forEach((e) =>
  e.addEventListener("click", function () {
    let cancelParent = e.parentElement.parentNode.parentNode;
    cancelParent.remove();
  })
);

checked.forEach((e) =>
  e.addEventListener("click", function () {
    if (!isRead) {
      let checkedParent =
        e.parentElement.parentNode.previousSibling.previousSibling
          .previousSibling.previousSibling.previousSibling.previousSibling;

      checkedParent.classList.remove("hidden");
      isRead = true;
    } else {
      let checkedParent =
        e.parentElement.parentNode.previousSibling.previousSibling
          .previousSibling.previousSibling.previousSibling.previousSibling;
      checkedParent.classList.add("hidden");
      isRead = false;
    }
  })
);
