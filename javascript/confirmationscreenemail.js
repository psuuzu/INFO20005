// Function to save the email
function saveEmail() {
    // Collect the email input
    let email = document.getElementById('emailInput').value;

    // Save the email
    localStorage.setItem('userEmail', email);

    // Redirect to confirmation page
    window.location.href = 'confirmation.html';
}

// Function to display the saved email on another page
function displaySavedEmail() {
    // Take saved email
    let savedEmail = localStorage.getItem('userEmail');

    // Display the email on confirmation page
    document.getElementById('savedEmail').textContent = savedEmail;
}

// Check if the current page is the confirmation page then call display email function
if (window.location.href.includes("confirmation.html")) {
    displaySavedEmail();
}