function sendEmail(){
    Email.send({
        Host:"smtp.elasticemail.com",
        Username:"hashembattah2@gmail.com",
        Password: "8982B4E3EA623A1D8875508928F4A133435D",
        To: 'hashembattah03@gmail.com',
        From: "hashembattah2@gmail.com",
        Subject: document.getElementById("subject").value,
        Body: "Name:" + document.getElementById("name").value 
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert(message)
    );
}

