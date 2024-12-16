// script.js
function SendMail() {
    var params = {
        from_name : document.getElementById("fullname").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_8z7ctuv", "template_md64hph", params).then(function (res) {
        alert("Success" + res.status);
    })
}