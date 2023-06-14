var buyButton = document.querySelectorAll(".ticket-button");
buyButton.addEventListener("click", function () {
  var modal = document.querySelector(".modal");
  modal.style.position = "fixed";
});

var closeButton = document.querySelector(".close");
closeButton.addEventListener("click", function () {
  var modal = document.querySelector(".modal");
  modal.style.position = "unset";
});
