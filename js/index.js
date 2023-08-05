/* ------------- Book Images Horizontal Scroll ------------- */

// Get the books container and initial mouse position
const booksContainer = document.querySelector('.books-container');
let isDragging = false;
let startX;
let scrollLeft;

// Event listeners for mouse events
booksContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - booksContainer.offsetLeft;
    scrollLeft = booksContainer.scrollLeft;
});

booksContainer.addEventListener('mouseleave', () => {
    isDragging = false;
});

booksContainer.addEventListener('mouseup', () => {
    isDragging = false;
});

booksContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
  const x = e.pageX - booksContainer.offsetLeft;
  const walk = (x - startX) * 2; // Control the scroll speed here
  booksContainer.scrollLeft = scrollLeft - walk;
});

/* ------------- For Query Handling ------------- */

function submitForm() {
    // Get the values from the input fields
    const name = document.getElementById('student-name').value;
    const college = document.getElementById('student-college').value;
    const phoneNumber = document.getElementById('student-phone').value;
    const subjects = document.getElementById('subjects').value;
    const classShift = document.getElementById('class-shift').value;
    const message = document.getElementById('message').value;

    // Compose the email body
    const body = `Student Name: ${name}\nStudent College: ${college}\nPhone Number: ${phoneNumber}\nSubjects: ${subjects}\nClass Shift: ${classShift}\n\nMessage: ${message}`;

    // Create the mailto link with the email address and subject
    const mailtoLink = `mailto:contactsanskarcs@gmail.com?subject=Class%20Query&body=${encodeURIComponent(body)}`;

    // Open the mail client with the pre-filled email data
    window.location.href = mailtoLink;
  }