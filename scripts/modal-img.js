// Get the modal and modal image
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const closeBtn = document.getElementsByClassName("close")[0];

// Apply to all images with the class 'modal-trigger'
const images = document.querySelectorAll(".modal-trigger");

images.forEach((img) => {
    img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });
});

// Close modal when clicking the close button
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close modal on any click inside modal
modal.onclick = function () {
  modal.style.display = "none";
};

document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});
