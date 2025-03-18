// Smooth scroll to book details
function scrollToBook(bookId) {
    document.getElementById(bookId).scrollIntoView({ behavior: 'smooth' });
}

// Handle feedback form submission
document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let feedback = document.getElementById("feedback").value;
    alert("Thank you, " + name + ", for your feedback!");
    document.getElementById("feedback-form").reset();
});
