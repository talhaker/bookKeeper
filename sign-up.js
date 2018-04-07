let validateData = function() {
    let messages = document.createElement("div");
    let messageCount = 0;
    // Verify username is at least 5 charachters long
    let userName = document.getElementById("user-name");
    if (userName.value.length < 5) {
        let messageDiv = document.createElement("p");
        let messageTxt = document.createTextNode("The supplied username is too short, try again using 5 or more characters<br>");
        messageDiv.appendChild(messageTxt);
        messages.appendChild(messageDiv);
        document.getElementById("user-msg").appendChild(messageDiv);
        messageCount++;
    }

    // Verify password is at least 6 charachters long
    let password1 = document.getElementById("password1");
    if (password1.value.length < 6) {
        let messageDiv = document.createElement("p");
        let messageTxt = document.createTextNode("The supplied password is too short, try again using 6 or more characters");
        messageDiv.appendChild(messageTxt);
        messages.appendChild(messageDiv);
        document.getElementById("pswd1-msg").appendChild(messageDiv);
        messageCount++;
    }

    // Verify both passwords match
    let password2 = document.getElementById("password2");
    if (password2.value !== password1.value) {
        let messageDiv = document.createElement("p");
        let messageTxt = document.createTextNode("The two passwords do NOT match");
        messageDiv.appendChild(messageTxt);
        messages.appendChild(messageDiv);
        document.getElementById("pswd2-msg").appendChild(messageDiv);
        messageCount++;
    }

    // Verify phone number is at least 15 digits long
    let phoneNum = document.getElementById("phone");
    if (phoneNum.value.length < 5) {
        let messageDiv = document.createElement("p");
        let messageTxt = document.createTextNode("The supplied phone number is too short, try again using 15 or more digits");
        messageDiv.appendChild(messageTxt);
        messages.appendChild(messageDiv);
        document.getElementById("phone-msg").appendChild(messageDiv);
    }

    if (messageCount > 0) {
        document.getElementById("messages").appendChild(messages);
    }

}