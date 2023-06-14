var buyButton = document.querySelectorAll(".ticket-button");
for (var i = 0; i < buyButton.length; i++) {
  buyButton[i].removeAttribute("href");
  buyButton[i].style.cursor = "pointer";
  buyButton[i].addEventListener("click", function () {
    var modal = document.querySelector(".modal");
    modal.style.display = "block";
  });
}

var closeButton = document.querySelectorAll(".close-button");
for (var i = 0; i < closeButton.length; i++) {
  closeButton[i].removeAttribute("href");
  closeButton[i].addEventListener("click", function () {
    var modal = document.querySelector(".modal");
    modal.style.display = "none";
  });
}

var xButton = document.querySelector(".close");
xButton.addEventListener("click", function () {
  var modal = document.querySelector(".modal");
  modal.style.display = "none";
});

var modalContainer = document.querySelector(".modal-container");
modalContainer.addEventListener("click", function (e) {
  e.preventDefault();
});
