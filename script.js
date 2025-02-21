const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let tabRow = document.createElement("div");
tabRow.id ="ans";
let tabDsc = document.createElement("span");
tabDsc.innerText = "Total Price";
let tabSum = document.createElement("span");
tabRow.appendChild(tabDsc);
tabRow.appendChild(tabSum);
document.body.appendChild(tabRow);

const getSum = () => {
  let pricVal = document.querySelectorAll(".price");
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    sum = sum + parseInt(pricVal[i].innerText);
  }
  console.log(sum);

  tabSum.innerText = sum;
};

tabDsc.classList.add("item")
tabSum.classList.add("prices")

getSumBtn.addEventListener("click", getSum);
