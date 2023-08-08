/* -------------- Clicking Contact ---------------- */

// Get the "Contact" button element
const contactButton = document.querySelector('a[href="#footer"]');

// Add a click event listener to the "Contact" button
contactButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Get the target element (the footer)
  const footer = document.getElementById("footer");

  // Scroll to the footer with smooth behavior
  footer.scrollIntoView({ behavior: "smooth" });
});

/* ------------- Book Images Horizontal Scroll ------------- */

// Get the books container and initial mouse position
const booksContainer = document.querySelector(".books-container");
let isDragging = false;
let startX;
let scrollLeft;

// Event listeners for mouse events
// TODO

/* ------------- For Query Handling ------------- */
function submitForm() {
  const name = document.getElementById("nameInput").value;
  const college = document.getElementById("collegeInput").value;
  const phone = document.getElementById("phoneInput").value;
  const subjects = Array.from(
    document.querySelectorAll('input[name="subject"]:checked')
  ).map((input) => input.value);
  const locations = Array.from(
    document.querySelectorAll('input[name="location"]:checked')
  ).map((input) => input.value);
  const message = document.getElementById("messageInput").value;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/submit_form", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(
    `name=${name}&college=${college}&phone=${phone}&subjects=${JSON.stringify(
      subjects
    )}&locations=${JSON.stringify(locations)}&message=${message}`
  );
}

/* ----------------------- slide-show ----------------------- */

const slideshow = document.querySelector(".slideshow");
const images = slideshow.querySelectorAll("img");
let currentIndex = 0;
const totalImages = images.length;

function startSlideshow() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlide();
  }, 3000); // Change the time (in milliseconds) to adjust the slide duration
}

function updateSlide() {
  const slideWidth = slideshow.clientWidth;
  slideshow.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

startSlideshow();

/* --------------------------- Digital Card Animation ------------------------ */

// Get references to the link and the target div
const showHideLink = document.getElementById("showCard");
const targetDiv = document.getElementById("hiddenCard");

// Add a click event listener to the link
showHideLink.addEventListener("click", () => {
  if (targetDiv.style.display === "none") {
    // If the div is hidden, show it with a fade-in effect
    targetDiv.style.display = "block";
    setTimeout(() => {
      targetDiv.style.opacity = "1";
    }, 10); // A small delay to ensure the display change takes effect before fading in
  } else {
    // If the div is visible, hide it with a fade-out effect
    targetDiv.style.opacity = "0";
    targetDiv.style.opacity = "0";
    setTimeout(() => {
      targetDiv.style.display = "none";
    }, 300); // Time for the fade-out effect (should match the transition time in CSS)
  }
});

document.addEventListener("click", function (event) {
  var hiddenCard = document.getElementById("hiddenCard");
  if (
    event.target !== document.getElementById("showCard") &&
    event.target !== hiddenCard
  ) {
    hiddenCard.style.opacity = "0";
    setTimeout(() => {
      hiddenCard.style.display = "none";
    }, 300);
  }
});


/* ------------ Age And Work-Ex Calculation ----------- */
function calculateNumbersOfYearsFrom(year) {
  const currentYear = new Date().getFullYear();
  return currentYear - year;
}

const birthYear = 1984;
const age = calculateNumbersOfYearsFrom(birthYear);
document.getElementById("ageValue").textContent = age;

const workExpStartYear = 2007;
const workExp = calculateNumbersOfYearsFrom(workExpStartYear);
document.getElementById("workExpValue").textContent = workExp;
