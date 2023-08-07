/* ------------- Book Images Horizontal Scroll ------------- */

// Get the books container and initial mouse position
const booksContainer = document.querySelector(".books-container");
let isDragging = false;
let startX;
let scrollLeft;

// Event listeners for mouse events
booksContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - booksContainer.offsetLeft;
  scrollLeft = booksContainer.scrollLeft;
});

booksContainer.addEventListener("mouseleave", () => {
  isDragging = false;
});

booksContainer.addEventListener("mouseup", () => {
  isDragging = false;
});

booksContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - booksContainer.offsetLeft;
  const walk = (x - startX) * 2; // Control the scroll speed here
  booksContainer.scrollLeft = scrollLeft - walk;
});

/* ------------- For Query Handling ------------- */

<<<<<<< HEAD
function sendEmail() {
    // Extract form data
    var name = document.getElementById("nameInput").value;
    var college = document.getElementById("collegeInput").value;
    var phone = document.getElementById("phoneInput").value;
    var subjects = document.getElementById("subjectsInput").value;
    var message = document.getElementById("messageInput").value;
    
    // Format the email message
    var emailMessage =
    "Name: " + name + "\n" +
    "College: " + college + "\n" +
    "Phone Number: " + phone + "\n" +
    "Subjects: " + subjects + "\n";
    
    if (message) { emailMessage += "Message: " + message + "\n"; }
    
    // Construct the mailto link
    var emailAddress = "contactsanskarcs@gmail.com";
    var subject = "Query from Website";
    var mailtoLink =
    "mailto:" + emailAddress +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(emailMessage);
    
  // Create a hidden anchor element and set its attributes
  var mailtoAnchor = document.createElement("a");
  mailtoAnchor.setAttribute("href", mailtoLink);
  mailtoAnchor.style.display = "none"; // Hide the anchor element
  
  // Add the anchor element to the document body
  document.body.appendChild(mailtoAnchor);
  
  // Trigger the click event on the hidden anchor element
  mailtoAnchor.click();
  
  // Remove the anchor element from the document body (optional)
  document.body.removeChild(mailtoAnchor);
  
  // Reset the form fields (optional)
  document.getElementById("nameInput").value = "";
  document.getElementById("collegeInput").value = "";
  document.getElementById("phoneInput").value = "";
  document.getElementById("subjectsInput").value = "";
  document.getElementById("messageInput").value = "";
}

/* ------------- slide-show ------------- */
=======
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
>>>>>>> bc29a08b1fad9778a1aac80f6be2a326a90b7541

const slideshow = document.querySelector(".slideshow");
const images = slideshow.querySelectorAll("img");
let currentIndex = 0;
<<<<<<< HEAD

function startSlideshow() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlide();
    }, 3000); // Change the time (in milliseconds) to adjust the slide duration
}

function updateSlide() {
    slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
}

startSlideshow();
=======
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
>>>>>>> bc29a08b1fad9778a1aac80f6be2a326a90b7541
