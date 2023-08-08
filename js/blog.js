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


/* ----------------  ----------------- */
document.addEventListener("DOMContentLoaded", function () {
    const blogForm = document.getElementById("blogSubmissionForm");

    blogForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const password = event.target.elements.password.value;
        const blogContent = event.target.elements.blogContent.value;

        // Add your password verification logic here
        // For simplicity, let's assume the password is "password123"
        if (password === "password123") {
            // Here, you can handle the successful blog submission
            alert("Blog submitted successfully!");
            // You can send the blog content to the server for further processing if required
        } else {
            alert("Incorrect password. Please try again.");
        }

        // Clear the form fields after submission (optional)
        event.target.reset();
    });
});
