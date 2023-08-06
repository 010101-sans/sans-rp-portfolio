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

const slideshow = document.querySelector(".slideshow");
const images = slideshow.querySelectorAll("img");
let currentIndex = 0;

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