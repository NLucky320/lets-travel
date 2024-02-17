const allBtn = document.getElementsByClassName("add-btn");
let count = 0;
for (const btn of allBtn) {
  btn.addEventListener(
    "click",
    function (event) {
      count = count + 1;

      const placeName = event.target.parentNode.childNodes[1].innerText;
      const price =
        event.target.parentNode.childNodes[3].childNodes[1].innerText;
      const placeContainer = document.getElementById(
        "selected-place-container"
      );
      const li = document.createElement("li");
      const place = document.createElement("P");
      place.innerText = placeName;
      const price2 = document.createElement("p");
      price2.innerText = price;

      event.target.parentNode.parentNode.style.backgroundColor = "gray";

      li.appendChild(place);
      li.appendChild(price2);

      const budget = document.getElementById("budget").innerText;
      const convertedBudget = parseInt(budget);

      if (convertedBudget - parseInt(price) < 0) {
        alert("low budget");
        return;
      }
      document.getElementById("budget").innerText =
        convertedBudget - parseInt(price);

      placeContainer.appendChild(li);

      totalCost("total-cost", parseInt(price));
      grandTotalCost("others");
      setInnerText("cart-count", count);
    },
    { once: true }
  );
}

function totalCost(elementId, value) {
  const totalCost = document.getElementById(elementId).innerText;
  const newTotalCost = parseInt(totalCost);
  const sum = newTotalCost + parseInt(value);
  setInnerText("total-cost", sum);
}

function grandTotalCost(category) {
  const totalCost = document.getElementById("total-cost").innerText;
  const newTotalCost = parseInt(totalCost);

  if (category === "bus") {
    setInnerText("grand-total", newTotalCost + 100);
  } else if (category === "train") {
    setInnerText("grand-total", newTotalCost - 200);
  } else if (category === "flight") {
    setInnerText("grand-total", newTotalCost + 500);
  } else {
    setInnerText("grand-total", newTotalCost);
  }
}

function setInnerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}
