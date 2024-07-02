var date = new Date();

document.getElementById("currentYear").innerHTML = date.getFullYear();
document.getElementById("lastModified").innerHTML = "Last updated: " + document.lastModified;

const speed = 10.5;
const temp = 22.3;
let windChill = null;

function calculateWindChill(temp, speed, withCelciusSymbol=true) {
  const wc = 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
  return withCelciusSymbol ? `${Math.round(wc)} ˚C` : Math.round(wc);
}

if (temp <= 10 && speed > 4.8) {
  windChill = calculateWindChill(temp, speed);
}

document.getElementById('temperature').innerText = `${temp} ˚C`;
document.getElementById('wind-speed').innerText = `${speed} kmh`;
document.getElementById('wind-chill').innerText = `${windChill === null ? 'N/A' : windChill}`;