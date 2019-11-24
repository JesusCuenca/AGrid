<template>
  <a-container>
    <a-row>
      <a-col>La columna</a-col>
      <a-col>La columna</a-col>
      <a-col>La columna</a-col>
      <a-col>La columna</a-col>
    </a-row>
    <a-row>
      <a-col>Otra columna</a-col>
      <a-col>Otra columna</a-col>
    </a-row>
  </a-container>
</template>

<script lang="ts">
import Vue from "vue";
import AContainer from "./AGrid/AContainer";
import ARow from "./AGrid/ARow";
import ACol from "./AGrid/ACol";

export default Vue.extend({
  name: "HelloWorld",
  components: {
    AContainer,
    ARow,
    ACol
  },
  props: {
    msg: String
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
