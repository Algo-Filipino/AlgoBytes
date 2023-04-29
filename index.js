window.addEventListener("load", function () {
  var loader = document.querySelector(".loader");
  loader.classList.add("loader--hide");

  var hiddenLoader = document.querySelector(".loader--hide");

  hiddenLoader.addEventListener("transitionend", function () {
    document.body.removeChild(document.querySelector(".loader"));
    window.scrollY;
  });
});
if (window.matchMedia("(max-width: 768px)").matches) {
  var msgBtn = document.querySelector(".msgUs-btn");

  msgBtn.style.display = "none";
  // const navlist = document.querySelector(".nav-list");
  // msgBtn.innerHTML = ` <a href="mailto:algofilipinoofficers@gmail.com">   <i class="bi bi-chat" style="font-size: 30px; border: none; background-color: transparent"></i>  </a>`;
  // msgBtn.style.border = "none !important";
}

const scrollToTopButton = document.getElementById("scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

AOS.init();

const lists = document.querySelector(".lists");
const video = document.querySelector(".myVid");
const list = lists.children;

list.item(0).addEventListener("click", function () {
  video.src = `https://drive.google.com/file/d/1hsIDKdKepIgYuXZgUSu6bE1_b3pi_uHC/preview`;
});
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
list.item(1).addEventListener("click", function () {
  video.src =
    "https://drive.google.com/file/d/17B7f5bwCrYxhInOcKE66baYrJQ1jyHvE/preview";
});
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);

list.item(2).addEventListener("click", function () {
  video.src =
    "https://drive.google.com/file/d/1F2gp3PDcGu2QgJrHrXLZhzvk6TDAby2o/preview?autoplay=1";
});
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
list.item(3).addEventListener("click", function () {
  video.src =
    "https://drive.google.com/file/d/1LUYefC-mONY5IRbBdmFxf41LTu_oCmng/preview";
});
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);

var popoverList = popoverTriggerList.map(function (popoverTrigger) {
  return new bootstrap.Popover(popoverTrigger);
});
