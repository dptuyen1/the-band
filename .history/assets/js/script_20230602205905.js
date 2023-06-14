var buyButton = document.querySelectorAll(".ticket-button");

for (var i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener("click", function () {
    var modal = document.querySelector(".modal");
    modal.style.position = "fixed";
  });
}

var closeButton = document.querySelectorAll(".close");

for (var i = 0; i < closeButton.length; i++) {
  closeButton.addEventListener("click", function () {
    var modal = document.querySelector(".modal");
    modal.style.position = "unset";
  });
}
