function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kathijazuhaina27@gmail.com", 
        Password: "7C8236CC0B2F681B19EDE458623BD616FBA1", 
        To: 'kathijazuhaina27@gmail.com', 
        From: "kathijazuhaina27@gmail.com",
        Subject: document.getElementById('subject').value,
        Body: "Name: " + document.getElementById('Name').value +
            "<br>Email: " + document.getElementById('Email').value +
            "<br>Contact Number: " + document.getElementById('Contact').value +
            "<br>Message: " + document.getElementById('message').value,
    }).then(
        message => {
            if (message === "OK") {
                swal("Email sent successfully!", "", "success");
            } else {
                swal("Error sending email", message, "error");
            }
        }
    );
}