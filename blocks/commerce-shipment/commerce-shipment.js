import { h, Fragment, render } from "@dropins/tools/preact.js";
import htm from "../../scripts/htm.js";
import { fetchPlaceholders } from "../../scripts/commerce.js";
import { readBlockConfig } from "../../scripts/aem.js";

const html = htm.bind(h);

function CreateShipment({ heading }) {
  return html`<${Fragment}>
    <h2 class="title">${heading}</h2>
    <input class="form-name" label="First Name" id="first-name"></input>
  <//>`;
}

export default async function decorate($block) {
  const placeholders = await fetchPlaceholders();
  $block.innerHTML = '<div class="full-height"></div>';
  const blockConfig = readBlockConfig($block);
  console.log("$block", $block);
  console.log("$placeholders", placeholders);
  const app = html`<${CreateShipment} heading="${blockConfig.heading}" />`;

  render(app, $block);
}
