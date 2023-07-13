import { Accordion } from "../functions/accordion";

const positionAccordions = document.querySelectorAll(".positions__accordion");

positionAccordions.forEach((item) => {
  new Accordion(item);
});
