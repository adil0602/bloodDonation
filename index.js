const countBox = document.getElementById('count-box');
const countBox1 = document.getElementById('count-box1');
const targetValue = 48;
const targetValue1 = 28; // Change this value to the desired stop value
let currentCount = 1;
let currentCount1 = 1;

function updateCount() {
    countBox.textContent = currentCount;
    if (currentCount < targetValue) {
        currentCount++;
        setTimeout(updateCount, 1); // Adjust the interval (in milliseconds) as needed
    }
}

function updateCount1() {
    countBox1.textContent = currentCount1;
    if (currentCount1 < targetValue1) {
        currentCount1++;
        setTimeout(updateCount1, 1); // Adjust the interval (in milliseconds) as needed
    }
}

updateCount();
updateCount1();


const loginButton = document.getElementById("loginbtn");
loginButton.addEventListener("click", () => {
    // Redirect to the login page
    window.location.href = "login.html";
});
const isLoggedIn = true; // Assume the user is logged in for demonstration

if (isLoggedIn) {
    loginbbtn.style.display = "none";

}