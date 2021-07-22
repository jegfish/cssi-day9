// const getMessages = () => {
//     const messagesRef = firebase.database().ref();
//     messagesRef.on("value", (snapshot) => {
//         const data = snapshot.val();
//         console.log(data);
//         for (let key in data) {
//             const message = data[key];
//             console.log(message);
//         }
//     });
// }

// const findMessage = (myPass) => {
//     const messagesRef = firebase.database().ref();
//     messagesRef.on("value", (snapshot) => {
//         const data = snapshot.val();
//         // console.log(data);
//         for (let key in data) {
//             const message = data[key];
//             console.log(message);
//             if (myPass === message.passcode) {
//                 renderMessage(message);
//             }
//         }
//     });
// }

document.querySelector("#viewMsg").addEventListener("click", (event) => {
    const userPasscodeGuess = document.querySelector("#passcode").value;
    console.log("user guess:", userPasscodeGuess);
    // findMessage(userPasscodeGuess);

    const messagesRef = firebase.database().ref();
    messagesRef.on("value", (snapshot) => {
        const data = snapshot.val();
        for (let key in data) {
            // console.log(data[key]);
            if (data[key].passcode == userPasscodeGuess) { // type coercion ==
                displayMessage(data[key]);
            }
        }
    });
});

function
displayMessage(msg)
{
    // document.querySelector("#")
    console.log(msg);
    document.querySelector("#message").innerHTML = msg.message;
}