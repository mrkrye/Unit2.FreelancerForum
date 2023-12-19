// Created a main div
const root = document.getElementById("root");
root.style.width = "80%";
root.style.margin = "0 auto";
root.style.textAlign = "center";

// Created title of the page as part of the heading
const header = document.createElement("h1");
header.innerHTML = "Freelancer Forums";
root.appendChild(header);
header.classList.add("header");

// Added a portion of text that states updated starting price
const averagePrice = document.createElement("p");
averagePrice.innerHTML = "The average starting price is $";
const avg = document.createElement("span");
avg.classList.add("averagePrice");
averagePrice.appendChild(avg);
root.appendChild(averagePrice);

// Created subtitle listing the table
const subTitle = document.createElement("h2");
subTitle.innerHTML = "Available Freelancers";
root.appendChild(subTitle);

// Create table -> table head -> table row -> table columns -> table body
// Append the appropriate columns and rows to the body, to the head, and to the main div
const table = document.createElement("table");
table.classList.add("table");
root.appendChild(table);
const tableHead = document.createElement("thead");
table.appendChild(tableHead);
const tableRow = document.createElement("tr");
tableHead.appendChild(tableRow);

const columnName = document.createElement("th");
columnName.classList.add("name");
columnName.innerHTML = "Name";
tableRow.appendChild(columnName);

const columnOccupation = document.createElement("th");
columnOccupation.classList.add("occupation");
columnOccupation.innerHTML = "Occupation";
tableRow.appendChild(columnOccupation);

const columnPrice = document.createElement("th");
columnPrice.classList.add("price");
columnPrice.innerHTML = "Price";
tableRow.appendChild(columnPrice);

// Created random array of name, price, and occupations
const name = [
  "Mike",
  "Geoffrey",
  "Mark",
  "Karla",
  "Timothy",
  "Peter",
  "Dr. Slice",
  "Dr. Pressure",
  "Prof. Possibility",
  "Prof. Prism",
  "Dr. Impulse",
  "Prof. Spark",
  "Dr. Wire",
  "Prof. Goose",
];

const occupation = [
  "Gardener",
  "Programmer",
  "Teacher",
  "Driver",
  "Mechanic",
  "Plumber",
  "Pilot",
  "Software Developer",
  "Data Analyst",
  "QA Tester",
];

const price = [25, 51, 43, 81, 43, 76, 47, 72, 32, 61, 29, 55];

// Displays the first 3 data in the beginning of the array
let initialData = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
  { name: "Carol", price: 70, occupation: "Programmer" },
];

// Create render function that pulls the information from the randomized data and displays on HTML page
let sum = 0;
function render(start = 0) {
  for (let i = start; i < initialData.length; i++) {
    // Use document.querySelector(".class") at least once to meet workshop requirement
    const table = document.querySelector(".table");
    const table_row = table.insertRow(-1);

    const name = table_row.insertCell(0);
    const textName = document.createTextNode(initialData[i].name);
    name.appendChild(textName);

    const occupation = table_row.insertCell(1);
    const textOccupation = document.createTextNode(initialData[i].occupation);
    occupation.appendChild(textOccupation);

    const price = table_row.insertCell(2);
    const textPrice = document.createTextNode("$"+initialData[i].price);
    price.appendChild(textPrice);
    // Gathers total price of price
    sum += initialData[i].price;
  }
  // Calculates average price by dividing the sum of price by the length of the array and rounds to the nearest whole number
  document.querySelector(".averagePrice").innerHTML = Math.round(
    sum / initialData.length
  );
}

// Creates function that puts random array into an object to be added to the end of the array
function addPeople() {
  const obj = {};
  obj.name = name[Math.floor(Math.random() * name.length)];
  obj.occupation = occupation[Math.floor(Math.random() * occupation.length)];
  obj.price = price[Math.floor(Math.random() * price.length)];
  initialData.push(obj);
  render(initialData.length - 1);
}

const max = 15;
const counter = 0;
// Creates loop that calls the addPeople function every 3 seconds for a total of 15 people
const count = setInterval(() => {
  addPeople();
  counter++;
  if (counter === max) {
    clearInterval(count);
  }
}, 3000);

render();
