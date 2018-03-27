let validateData = function() {
    // Verify username is at least 5 charachters long
    let userName = document.getElementById("user-name");
    if (userName.value.length < 5) {
        let messageDiv = document.createElement("div");
        let messageTxt = document.createTextNode("The supplied username is too short, try again using 5 or more characters");
        messageDiv.appendChild(messageTxt);
        document.getElementById("user-msg").appendChild(messageDiv);
    }

    // Verify password is at least 6 charachters long
    let password1 = document.getElementById("password1");
    if (password1.value.length < 6) {
        let messageDiv = document.createElement("div");
        let messageTxt = document.createTextNode("The supplied password is too short, try again using 6 or more characters");
        messageDiv.appendChild(messageTxt);
        document.getElementById("pswd1-msg").appendChild(messageDiv);
    }

    // Verify both passwords match
    let password2 = document.getElementById("password2");
    if (password2.value !== password1.value) {
        let messageDiv = document.createElement("div");
        let messageTxt = document.createTextNode("The two passwords do NOT match");
        messageDiv.appendChild(messageTxt);
        document.getElementById("pswd2-msg").appendChild(messageDiv);
    }
}