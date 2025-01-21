// nav active
const navLinks = Array.from(document.querySelectorAll(".navbar .nav-link"));
const sections = Array.from(document.querySelectorAll("section"));

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    if (
      window.scrollY >= section.offsetTop - section.offsetHeight / 3 &&
      window.scrollY < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
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

// scroll to top
const scrollTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    scrollTop.style.display = "flex";
  } else {
    scrollTop.style.display = "none";
  }
});

// navbar
const navbar = document.getElementById("navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Scrolling down
    navbar.classList.add("d-none");
  } else {
    // Scrolling up
    navbar.classList.remove("d-none");
    navbar.classList.add("bg-scroll");
  }

  lastScrollY = currentScrollY;

  if (window.scrollY <= 100) {
    navbar.classList.remove("bg-scroll");
  }
});

// validation
const userName = document.getElementById("name");
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
    name: /^[A-Za-z\s]+$/,
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

name.addEventListener("blur", () => {
  validationInputs(name, "nameError");
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
