var date = new Date();

document.getElementById("currentYear").innerHTML = date.getFullYear();
document.getElementById("lastModified").innerHTML = "Last updated: " + document.lastModified;

const navi = document.querySelector('nav');
const ham = document.querySelector('#ham');

ham.addEventListener('click', () => {
  navi.classList.toggle('show');
  ham.classList.toggle('show');
});
