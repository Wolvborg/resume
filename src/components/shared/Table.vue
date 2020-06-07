<template>
  <table id="table" class="is-fullwidth">
    <thead>
      <tr>
        <th class="has-text-primary has-text-centered" v-for="head in tableData.head" v-bind:key="head">{{head}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row,i) in tableData.row" v-bind:key="i">
        <td class="has-text-centered" v-for="(item,i) in row" v-bind:key="i">{{item}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props:['tableData']
});
</script>
