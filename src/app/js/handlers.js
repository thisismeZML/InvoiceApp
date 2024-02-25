import { productRender } from "./products.js";
import {
  deleteRecord,
  productQuantityPlus,
  productQuantitySub,
  recordCreate,
  updateTotalCost,
} from "./record.js";
import {
  invenProductCreateform,
  productCreateFormSection,
  recordTableBody,
  slider,
} from "./selectors.js";
import { products } from "./variable.js";

export const recordCreateHandler = (e) => {
  e.preventDefault();

  const formData = new FormData(productCreateFormSection);

  const pId = parseInt(formData.get("productSelect"));
  const pQuantity = parseFloat(formData.get("productQuantity"));

  const currentProduct = products.find((el) => el.id === pId);

  console.log(currentProduct);

  // check Data-set-id
  const isExisted = recordTableBody.querySelector(`[data-set-id = '${pId}'] `);

  if (isExisted) {
    const currentQuantity = isExisted.querySelector(".product-quantity");
    const currentPrice = isExisted.querySelector(".product-price");
    const currentCost = isExisted.querySelector(".product-cost");

    currentQuantity.innerText = parseInt(currentQuantity.innerText) + pQuantity;

    currentCost.innerText = currentPrice.innerText * currentQuantity.innerText;
  } else {
    recordTableBody.append(recordCreate(currentProduct, pQuantity));
  }

  updateTotalCost();

  productCreateFormSection.reset();
};

export const rowGroupHandler = (e) => {
  if (e.target.classList.contains("row-delete-btn")) {
    deleteRecord(e);
  } else if (e.target.classList.contains("p-q-plus")) {
    productQuantityPlus(e);
  } else if (e.target.classList.contains("p-q-sub")) {
    productQuantitySub(e);
  }
};

export const printBtnHandler = () => {
  window.print();
};

export const manageInventoryBtnHandler = () => {
  slider.classList.toggle("-translate-x-[380px]");
};

export const invenProductCreateformHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(invenProductCreateform);
  const newProducts = {
    id: Date.now(),
    name: formData.get("invenProduct"),
    price: formData.get("invenPrice"),
  };

  products.push(newProducts);
  productRender(products);

  invenProductCreateform.reset();
};
