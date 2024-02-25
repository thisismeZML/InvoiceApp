import { productRecordTemplate, totalCost } from "./selectors.js";

export const recordCreate = ({ name,id, price }, quantity) => {
  const record = productRecordTemplate.content.cloneNode(true);

  record.querySelector(".row").setAttribute("data-set-id" , id);

  const recordCost = price * quantity;

  record.querySelector(".product-name").innerText = name;

  record.querySelector(".product-price").innerText = price;

  record.querySelector(".product-quantity").innerText = quantity;

  record.querySelector(".product-cost").innerText = recordCost;

  return record;
};

export const deleteRecord = (e) => {
  const row = e.target.closest(".row");
  if (confirm("Are you sure to delete")) {
    row.remove();
  }
  updateTotalCost();
};

export const productQuantityPlus = (e) => {
  const row = e.target.closest(".row");
  
  const currentQuantity = row.querySelector(".product-quantity");
  const currentPrice = row.querySelector(".product-price");
  const currentCost = row.querySelector(".product-cost");

  currentQuantity.innerText = parseInt(currentQuantity.innerText) + 1;

  currentCost.innerText = currentPrice.innerText * currentQuantity.innerText;

  updateTotalCost();
}

export const productQuantitySub = (e) => {
  const row = e.target.closest(".row");
  
  const currentQuantity = row.querySelector(".product-quantity");
  const currentPrice = row.querySelector(".product-price");
  const currentCost = row.querySelector(".product-cost");

  if (currentQuantity.innerText > 1) {
    currentQuantity.innerText = parseInt(currentQuantity.innerText) - 1;
  } else {
    deleteRecord(e);
  }

  currentCost.innerText = currentPrice.innerText * currentQuantity.innerText;

  updateTotalCost();
}

export const updateTotalCost = () => {
  const allCost = document.querySelectorAll(".product-cost");

  const total = [...allCost].reduce(
    (pv, { innerText }) => pv + parseFloat(innerText),
    0
  );

  totalCost.innerText = total;
};
