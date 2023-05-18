document.getElementById("changePasswordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission

    // Get form values
    var currentPassword = document.getElementById("currentPassword").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (newPassword === confirmPassword) {
       
        alert("Password changed successfully!");
       
    } else {
        
        alert("New password and confirm password must match. Please try again.");
    }

    // Reset the form
    this.reset();
});