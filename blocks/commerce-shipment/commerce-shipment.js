import { h, Fragment, render } from "@dropins/tools/preact.js";
import htm from "../../scripts/htm.js";
import { fetchPlaceholders } from "../../scripts/commerce.js";

const html = htm.bind(h);

function CreateShipment() {
  return html`<${Fragment}>
    <h2 class="title">Create Shipment</h2>
    <input class="form-name" label="First Name" id="first-name"></input>
  <//>`;
}

export default async function decorate($block) {
  const placeholders = await fetchPlaceholders();
  $block.innerHTML = '<div class="full-height"></div>';
  console.log("$block", $block);
  console.log("$placeholders", placeholders);
  const app = html`<${CreateShipment} />`;

  render(app, $block);
}
