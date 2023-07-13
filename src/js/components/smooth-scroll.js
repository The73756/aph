import vars from "../_vars";
import SmoothScroll from "smooth-scroll";
new SmoothScroll('a[href*="#"]', {
  offset: vars.headerHeight + 50,
});
