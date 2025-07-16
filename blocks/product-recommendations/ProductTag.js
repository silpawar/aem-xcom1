import { Tag, provider as UI } from "@dropins/tools/components.js";

/**
 * Renders a product tag inside the given wrapper.
 * @param {HTMLElement} wrapper - The parent element to append the tag to.
 * @param {object} ctx - The context object containing item data.
 */
export function renderProductTag(wrapper, ctx) {
  const text = document.createElement("div");
  wrapper.appendChild(text);

  UI.render(Tag, {
    label: ctx.item.sku,
  })(text);
}
