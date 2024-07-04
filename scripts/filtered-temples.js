var date = new Date();

document.getElementById("currentYear").innerHTML = date.getFullYear();
document.getElementById("lastModified").innerHTML = "Last updated: " + document.lastModified;

const navi = document.querySelector('nav');
const ham = document.querySelector('#ham');

ham.addEventListener('click', () => {
  navi.classList.toggle('show');
  ham.classList.toggle('show');
});

const temples = [
  {
    templeName: "Quito Ecuador",
    location: "Quito, Ecuador",
    dedicated: "2022, November, 20",
    area: 2585,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quito-ecuador/1280x800/quito_ecuador_temple.jpg",
  },
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Guayaquil Ecuador",
    location: "Guayaquil, Ecuador",
    dedicated: "1999, August, 1",
    area: 70884,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guayaquil-ecuador/1280x800/guayaquil-ecuador-temple-lds-884500-wallpaper.jpg"
  },
  {
    templeName: "Perth Australia",
    location: "Perth, Australia",
    dedicated: "2001, may, 20",
    area: 10700,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/perth-australia/1280x800/perth-australia-temple-lds-957466-wallpaper.jpg"
  }
];

createCards(temples);


const home = document.querySelector("#home")
const old = document.querySelector("#old");
const modern = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");

home.addEventListener("click", () => {
  createCards(temples);
  document.getElementById("currentfilter").innerHTML = "Home";
});

old.addEventListener("click", () => {
  let filteredTemples = temples.filter(function(temple) {
    return temple.dedicated <= "1900";
  });
  createCards(filteredTemples);
  document.getElementById("currentfilter").innerHTML = "Old";

});

modern.addEventListener("click", () => {
  let filteredTemples = temples.filter(function(temple) {
    return temple.dedicated >= "2000";
  });
  createCards(filteredTemples);
  document.getElementById("currentfilter").innerHTML = "New";

});

large.addEventListener("click", () => {
  let filteredTemples = temples.filter(function(temple) {
    return temple.area >= 90000;
  });
  createCards(filteredTemples);
  document.getElementById("currentfilter").innerHTML = "Large";

});

small.addEventListener("click", () => {
  let filteredTemples = temples.filter(function(temple) {
    return temple.area <= 10000;
  });
  createCards(filteredTemples);
  document.getElementById("currentfilter").innerHTML = "Small";

});


function createCards(filter) {
  document.getElementById("cards").innerHTML = "";
  for (let i = 0; i < filter.length; i++) {
    let container = document.createElement("div");
    container.setAttribute("class", "card")
    document.getElementById("cards").appendChild(container)
  
    let temple = document.createElement("h3");
    temple.textContent = filter[i].templeName;
    container.appendChild(temple);
  
    let location = document.createElement("dd");
    location.textContent = "Location: " + filter[i].location;
    container.appendChild(location);
  
    let dedicated = document.createElement("dd");
    dedicated.textContent = "Dedication: " + filter[i].dedicated;
    container.appendChild(dedicated);
  
    let area = document.createElement("dd");
    area.textContent = "Area: " + filter[i].area + " sq ft";
    container.appendChild(area);
  
    let img = document.createElement("img");
    img.setAttribute("src", filter[i].imageUrl);
    img.setAttribute("loading", "lazy")
    container.appendChild(img);
  };
};

