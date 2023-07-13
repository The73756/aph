import { Accordion } from "../functions/accordion";

const positionAccordions = document.querySelectorAll(".positions__accordion");
const stepsAccordions = document.querySelectorAll(".steps__accordion");

[...stepsAccordions, ...positionAccordions].forEach((item) => {
  new Accordion(item);
});
