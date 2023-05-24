function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get your User ID from the EmailJS dashboard
    emailjs.init('g0dqdHG0GOfUYBlMb');

    // Delay execution by 100 milliseconds (adjust the delay as needed)
    setTimeout(function () {
        // Send email using EmailJS
        emailjs.send("service_ze3uvcl","template_8z9xhb7", {
            message: document.getElementById('message').value
        })
            .then(function (response) {
                alert('Email sent successfully'); // Modify the success message as needed
                // Reset the form after successful submission
                document.getElementById('mail').reset();
            })
            .catch(function (error) {
                alert('Email failed to send'); // Modify the error message as needed
            });
    }, 100); // Delay of 100 milliseconds
}