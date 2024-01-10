//your JS code here. If required.
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Getting form values
    const name = document.getElementById('name').value;
    const Lastname = document.getElementById('Lastname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Creating alert message with form info
    const alertMessage = `Name: ${name}\n Last Name:${Lastname}\n Phone: ${phone} \nEmail: ${email}`;

    // Displaying form info in an alert
    alert(alertMessage);
});

