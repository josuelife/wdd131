var date = new Date();

document.getElementById("currentYear").innerHTML = date.getFullYear();
document.getElementById("lastModified").innerHTML = "Last updated: " + document.lastModified;


const reviewsDisplay = document.getElementById("review");

let numberReviews = Number(window.localStorage.getItem("number")) || 1;

reviewsDisplay.textContent = numberReviews;
numberReviews++;

localStorage.setItem("number", numberReviews);