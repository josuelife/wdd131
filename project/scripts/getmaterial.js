var date = new Date();

document.getElementById("currentYear").innerHTML = date.getFullYear();
document.getElementById("lastModified").innerHTML = "Last updated: " + document.lastModified;

const levels = [
  {
    id: "fc-1888",
    name: "Begginer",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "Intermediate",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "Advanced",
    averagerating: 3.5
  }
];

levels.forEach(product => {
  let option = document.createElement("option");
  option.setAttribute("value", `${product.name}`);
  option.innerHTML = product.name;
  document.getElementById("productName").appendChild(option);
});
