const head = document.getElementById("head");
head.style.width = "80%";
head.style.margin = "0 auto";

const root = document.getElementById("root");
root.style.width = "80%";
root.style.margin = "0 auto";

const header = document.createElement("div");
head.appendChild(header);

const title = document.createElement("h1");
title.innerHTML = "Freelancer Forum";
header.appendChild(title);

const average = document.createElement("p");
average.innerHTML = "The average starting price is $50";
header.appendChild(average);

// turn into function later to add math to the average
// arrFreelancers.forEach((price) => {
//   console.log(price.price);
// });

// function calculateAllInventoryPrice() {
//   arrFreelancers.reduce((sum, elem) => {
//     return (sum += elem.price);
//   }, 0);
// }
// console.log(calculateAllInventoryPrice);

const subTitle = document.createElement("h2");
subTitle.innerHTML = "Available Freelancers";
header.appendChild(subTitle);

const arrFreelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
  { name: "Carol", price: 70, occupation: "Programmer" },
];

const table = document.createElement("table");
table.className = "table";
root.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const tr = document.createElement("tr");
thead.appendChild(tr);

const thName = document.createElement("th");
thName.innerHTML = "Name";
tr.appendChild(thName);

const thOccupation = document.createElement("th");
thOccupation.innerHTML = "Occupation";
tr.appendChild(thOccupation);

const thPrice = document.createElement("th");
thPrice.innerHTML = "Price";
tr.appendChild(thPrice);

const tbody = document.createElement("tbody");
table.appendChild(tbody);

arrFreelancers.forEach((element) => {
  const trBody = document.createElement("tr");
  tbody.appendChild(trBody);

  const tdName = document.createElement("td");
  tdName.innerHTML = element.name;
  trBody.appendChild(tdName);

  const tdOccupation = document.createElement("td");
  tdOccupation.innerHTML = element.occupation;
  trBody.appendChild(tdOccupation);

  const tdPrice = document.createElement("td");
  tdPrice.innerHTML = element.price;
  trBody.appendChild(tdPrice);
});

const addFreelancer = () => {
  // display();
  const name = name[Math.floor(Math.random) * name.length];
  const occupation = occupation[Math.floor(Math.random() * occupation.length)];
  const price = price[Math.floor(Math.random) * price.length];
  arrFreelancers.push({ name, occupation, price });
};

// setInterval will call 'addFreelancer' every 3000ms (3s)
// calling 'clearInterval(addFreelancerIntervalId)' will stop interval
const maxFreelancer = 10;
const addFreelancerIntervalId = setInterval(addFreelancer, 3000);
if (arrFreelancers.length >= maxFreelancer) {
  clearInterval(addFreelancerIntervalId);
}


// // let bool = true;

// // display table
// const display = () => {
//   arrFreelancers.forEach((element) => {
//     // if (bool) {
//       const trBody = document.createElement("tr");
//       tbody.appendChild(trBody);

//       const tdName = document.createElement("td");
//       tdName.innerHTML = element.name;
//       trBody.appendChild(tdName);

//       const tdOccupation = document.createElement("td");
//       tdOccupation.innerHTML = element.occupation;
//       trBody.appendChild(tdOccupation);

//       const tdPrice = document.createElement("td");
//       tdPrice.innerHTML = element.price;
//       trBody.appendChild(tdPrice);
//     });
//   // bool = false;
// // };


// addFreelancer();

