const btn = document.querySelector("button");
const user = document.querySelector("#user");
const passcode = document.querySelector("#passcode");

btn.addEventListener("click", function () {
    const userValue = user.value;
    const passcodeValue = passcode.value;
    console.log(userValue);
    console.log(passcodeValue);


    if (userValue !== "appclick" || passcodeValue !== "appclick123") {
        alert("Username/Password incorrect");
    } else {
        alert ("Logged in successfully");
    }

})