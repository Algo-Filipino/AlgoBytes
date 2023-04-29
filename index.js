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
  const navlist = document.querySelector(".nav-list");
  msgBtn.innerHTML = ` <a href="mailto:algofilipinoofficers@gmail.com">   <i class="bi bi-chat" style="font-size: 30px; border: none; background-color: transparent"></i>  </a>`;
  msgBtn.style.border = "none !important";
}

// const switchToggle = document.querySelector("#checkbox");
// switchToggle.addEventListener("click", function () {
//   window.addEventListener("click", function (event) {
//     switchToggle.checked = false;
//   });
// });

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
  video.src = "Leadership.mp4";
});
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
list.item(1).addEventListener("click", function () {
  video.src = "gdw.mkv";
});
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);

list.item(2).addEventListener("click", function () {
  video.src = "OSC.mov";
});
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
list.item(3).addEventListener("click", function () {
  video.src = "WMW.mp4";
});
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);

var popoverList = popoverTriggerList.map(function (popoverTrigger) {
  return new bootstrap.Popover(popoverTrigger);
});
