const galleryItem = document.querySelectorAll(".gallery__item");
const lightbox = document.querySelector(".lightbox");
const lightboxWrapper = document.querySelector(".lightbox__wrapper");
const lightboxImg = document.querySelector(".lightbox__img");
const lightboxClose = document.querySelector(".lightbox__close");
const lightboxNext = document.querySelector(".lightbox__next");
const lightboxPrev = document.querySelector(".lightbox__prev");


let index = 1


function showLightBox(lightBox) {
  let imgLocation = galleryItem[index - 1].children[0].getAttribute("src");
  lightboxImg.setAttribute("src", imgLocation);
}

function currentImg() {
  lightbox.style.opacity = 1
  lightbox.style.pointerEvents = "all";

  let imageIndex = parseInt(this.getAttribute("data-item"));
  showLightBox(index = imageIndex);
}

galleryItem.forEach(item => item.addEventListener("click", currentImg));

function sliderImage(slider) {
  showLightBox(index += slider);
}

function prevImage() {
  if (index === 1) {
    index = galleryItem.length
  }
  showLightBox(index -= 1);
}

function nextImage() {
  if (index === galleryItem.length) {
    index = 1
  }
  showLightBox(index += 1);
}

lightboxPrev.addEventListener("click", prevImage);
lightboxNext.addEventListener("click", nextImage);


lightbox.addEventListener("click", (event) => {
  if (event.target === lightboxWrapper) {
    lightbox.style.opacity = 0
    lightbox.style.pointerEvents = "none";
  }
  if (event.target === lightboxClose) {
    lightbox.style.opacity = 0
    lightbox.style.pointerEvents = "none";

  }
})