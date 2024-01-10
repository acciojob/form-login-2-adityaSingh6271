document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Retrieve form values
    const firstName = this.elements['First Name'].value;
    const lastName = this.elements['Last Name'].value;
    const phoneNumber = this.elements['Phone Number'].value;
    const email = this.elements['Email ID'].value;

    // Create the message with proper formatting
    const message = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail ID: ${email}`;

    // Display form information in an alert
    alert(message);
});
