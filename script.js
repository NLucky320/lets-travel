const allBtn = document.getElementsByClassName("add-btn");
let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (event) {
    count = count + 1;

    const placeName = event.target.parentNode.childNodes[1].innerText;
    setInnerText("cart-count", count);
  });
}

function setInnerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}
