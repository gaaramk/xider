// scroll to top
const scrollTop = document.querySelector(".scrollToTop");
const navbar = document.querySelector(".navbar");

let prevScroll = 0;
let currentScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollTop.style.display = "flex";
    navbar.style.backgroundColor = "var(--bg-color)";
  } else {
    scrollTop.style.display = "none";
    navbar.style.backgroundColor = "transparent";
  }
});

// scroll down no nav, scroll up with nav
window.addEventListener("scroll", () => {
  prevScroll = currentScroll;
  currentScroll = window.scrollY;
  if (currentScroll > prevScroll) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }
});

// portfolio
const portfolioImgs = Array.from(
  document.querySelectorAll(".portfolio .inner img")
);
const portfolioItems = Array.from(
  document.querySelectorAll(".portfolio .inner")
);
const portfolioOverlay = document.querySelector(".portfolio .overlaySlider");
const portfolioOverlayImg = document.querySelector(
  ".portfolio .overlaySlider img"
);
const portfolioCloseBtn = document.querySelector(
  ".portfolio .overlaySlider .closeBtn"
);
const portfolioPrevBtn = document.querySelector(
  ".portfolio .overlaySlider .prev"
);
const portfolioNextBtn = document.querySelector(
  ".portfolio .overlaySlider .next"
);
let portfolioIndex;

portfolioItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    portfolioOverlay.style.display = "flex";
    portfolioOverlay.style.opacity = 1;
    portfolioOverlayImg.src = item.querySelector("img").src;
    portfolioOverlayImg.alt = item.querySelector("img").alt;
    portfolioIndex = index;
  });
});

function slider(direction) {
  portfolioIndex += direction;
  portfolioOverlayImg.src = portfolioImgs[portfolioIndex].src;
  portfolioOverlayImg.alt = portfolioImgs[portfolioIndex].alt;
}

portfolioCloseBtn.addEventListener("click", () => {
  portfolioOverlay.style.display = "none";
  portfolioOverlay.style.opacity = 0;
});

portfolioPrevBtn.addEventListener("click", () => {
  slider(-1);
});

portfolioNextBtn.addEventListener("click", () => {
  slider(1);
});

// keyboard
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    portfolioOverlay.style.display = "none";
    portfolioOverlay.style.opacity = 0;
  }

  if (e.key === "ArrowLeft") {
    slider(-1);
  }

  if (e.key === "ArrowRight") {
    slider(1);
  }
});

// touch
portfolioItems.forEach((item) => {
  item.addEventListener("touchstart", () => {
    portfolioOverlay.style.display = "flex";
    portfolioOverlay.style.opacity = 1;
    portfolioOverlayImg.src = item.querySelector("img").src;
    portfolioOverlayImg.alt = item.querySelector("img").alt;
    portfolioIndex = item;
  });
});

// validation
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  if (
    validationInputs(userName, "nameError") &&
    validationInputs(email, "emailError") &&
    validationInputs(subject, "subjectError") &&
    validationInputs(message, "messageError")
  ) {
    alert("Thank you for your message");
    userName.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  }
});

function validationInputs(element, msgId) {
  let text = element.value;
  let regex = {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    userName: /^[A-Za-z\s]+$/,
    subject: /^[A-Za-z\s]+$/,
    message: /^[A-Za-z\s]+$/,
  };
  let messageError = document.getElementById(msgId);

  if (regex[element.id].test(text)) {
    messageError.style.display = "none";
    return true;
  } else {
    messageError.style.display = "block";
    return false;
  }
}

userName.addEventListener("blur", () => {
  validationInputs(userName, "nameError");
});
email.addEventListener("blur", () => {
  validationInputs(email, "emailError");
});
subject.addEventListener("blur", () => {
  validationInputs(subject, "subjectError");
});
message.addEventListener("blur", () => {
  validationInputs(message, "messageError");
});
