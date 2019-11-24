import Vue, { VNodeData } from "vue";
import { VNode, VNodeDirective, FunctionalComponentOptions } from "vue/types";
import mergeData from "./mergeData";

export function createSimpleFunctional(c: string, el = "div", name?: string) {
  return Vue.extend({
    name: name || c.replace(/__/g, "-"),

    functional: true,

    render(h, { data, children }): VNode {
      data.staticClass = `${c} ${data.staticClass || ""}`.trim();

      return h(el, data, children);
    }
  });
}

/**
 * Makes the first character of a string uppercase
 */
export function upperFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Camelize a hyphen-delimited string.
 */
const camelizeRE = /-(\w)/g;
export const camelize = (str: string): string => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""));
};
