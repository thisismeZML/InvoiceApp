import { invenBody, invenTemplate, productSelect } from "./selectors.js";

export const createProduct = ({name , id , price}) => {
  const invenProduct = invenTemplate.content.cloneNode(true);

  invenProduct.querySelector(".p-name").innerText = name;

  invenProduct.querySelector(".p-price").innerText = price;
  
  return invenProduct;
};

export const productRender = (products) => {
  productSelect.innerHTML = "";
  invenBody.innerHTML = "";
  products.forEach(({ name, id ,price }) => {
    productSelect.append(new Option(name, id));
    invenBody.append(createProduct({name , id , price}))
  });
};
