import {
  invenProductCreateformHandler,
  manageInventoryBtnHandler,
  printBtnHandler,
  recordCreateHandler,
  rowGroupHandler,
} from "./handlers.js";
import {
  closeBtn,
  invenProductCreateform,
  manageInventoryBtn,
  printBtn,
  productCreateFormSection,
  recordTableBody,
} from "./selectors.js";

export const listeners = () => {
  productCreateFormSection.addEventListener("submit", recordCreateHandler);

  recordTableBody.addEventListener("click", rowGroupHandler);

  printBtn.addEventListener("click", printBtnHandler);

  manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);

  closeBtn.addEventListener("click", manageInventoryBtnHandler);

  invenProductCreateform.addEventListener(
    "submit",
    invenProductCreateformHandler
  );
};
