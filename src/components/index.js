import Vue from "vue";
import AContainer from "./AGrid/AContainer";
import ARow from "./AGrid/ARow";
import ACol from "./AGrid/ACol";
import ASpacer from "./AGrid/ASpacer";

const Components = {
  AContainer,
  ARow,
  ACol,
  ASpacer
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
