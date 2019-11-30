<template>
  <div id="app">
    <a-container>
      <a-row>
        <a-col>
          <div>Align</div>
          <label
            :for="`e1-align-${a}`"
            v-for="a in alignOpts"
            :key="`e1-align-${a}`"
          >
            <input
              :id="`e1-align-${a}`"
              type="radio"
              :value="a"
              v-model="e1.align"
            />
            {{ a }}
          </label>
        </a-col>
        <a-col>
          <div>Justify</div>
          <label
            :for="`e1-justify-${a}`"
            v-for="a in justifyOpts"
            :key="`e1-justify-${a}`"
          >
            <input
              :id="`e1-justify-${a}`"
              type="radio"
              :value="a"
              v-model="e1.justify"
            />
            {{ a }}
          </label>
        </a-col>
      </a-row>
      <a-row
        class="example"
        :justify="e1.justify"
        :align="e1.align"
        style="height: 300px"
      >
        <div class="placeholder">Column</div>
        <div class="placeholder">Column</div>
        <div class="placeholder">Column</div>
      </a-row>
    </a-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "app",
  data() {
    return {
      alignOpts: ["start", "end", "center", "baseline", "stretch"],
      justifyOpts: ["start", "end", "center", "space-between", "space-around"],
      alignContentOpts: [
        "start",
        "end",
        "center",
        "space-between",
        "space-around",
        "stretch"
      ],
      e1: {
        align: "start",
        justify: "center",
        columns: 3,
        rows: 1
      }
    };
  }
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  .example::before {
    content: attr(class);
  }

  .placeholder {
    padding: 10px;
    margin: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: #fff;
  }

  .row.example {
    background-color: #fafafa;
    padding: 10px;
    padding-top: 22px;
    position: relative;

    &::before {
      top: 3px;
      left: 10px;
      position: absolute;
      font-size: 14px;
      line-height: 20px;
    }
  }

  .col.example {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
}
</style>
