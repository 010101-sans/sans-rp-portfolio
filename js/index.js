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

function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const college = document.getElementById("college").value;
  const phone = document.getElementById("phone").value;
  const subjects = getSelectedValues("subject");
  const locations = getSelectedValues("location");

  const formData = {
    name,
    college,
    phone,
    subjects,
    locations,
  };

  // Make an HTTP POST request to the server
  fetch("/submitQuery", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.text())
    .then((message) => {
      console.log(message);
      alert(message);
      // Clear the form after successful submission
      document.getElementById("queryForm").reset();
    })
    .catch((error) => {
      console.error("Error submitting the form:", error);
      alert("Error submitting the form. Please try again.");
    });
}

function getSelectedValues(selectId) {
  const selectElement = document.getElementById(selectId);
  const selectedValues = [];
  for (let i = 0; i < selectElement.options.length; i++) {
    const option = selectElement.options[i];
    if (option.selected) {
      selectedValues.push(option.value);
    }
  }
  return selectedValues;
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

document.getElementById("showCard").addEventListener("click", function (event) {
  var hiddenCard = document.getElementById("hiddenCard");
  if (hiddenCard.style.display === "none") {
    hiddenCard.style.display = "block";
  } else {
    hiddenCard.style.display = "none";
  }
});
