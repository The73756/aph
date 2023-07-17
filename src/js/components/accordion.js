import { Accordion } from "../functions/accordion";

const positionAccordions = document?.querySelectorAll(".positions__accordion");
const stepsAccordions = document?.querySelectorAll(".steps__accordion");

if (positionAccordions.length && stepsAccordions.length) {
  [...stepsAccordions, ...positionAccordions].forEach((item) => {
    new Accordion(item);
  });
}
