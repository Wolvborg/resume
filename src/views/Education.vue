<template>
  <div id="education">
    <Accordion class="grad-accordion accordion" title="Graduation">
      <div class="grad-content content">
        <div class="grad-info info content is-medium">
          <p>
            Bachelor of Technology in
            <span class="has-text-primary title is-4"
              >Computer Science & Engineering</span
            >
            from
            <span class="has-text-primary title is-4"
              >Noida Institute of Engineering & Technology</span
            >
            (<abbr title="Dr. A.P.J. Abdul Kalam Technical University"
              >APJAKTU</abbr
            >) from year
            <span class="has-text-primary title is-4">2013</span>
            to
            <span class="has-text-primary title is-4">2017</span>
            with
            <span class="has-text-primary title is-4">63.85</span>
            aggregate percentage.
          </p>
        </div>
        <div class="grad-table table">
          <Table v-bind:tableData="grad" />
        </div>
      </div>
    </Accordion>

    <Accordion class="sss-accordion accordion" title="Senior Secondary School">
      <div class="sss-content content">
        <div class="sss-info info content is-medium">
          <p>
            <span class="has-text-primary title is-4">Science</span> as Core
            Stream from
            <span class="has-text-primary title is-4">Kendriya Vidyalaya</span>
            Number 1, Delhi Cantt. with
            <span class="has-text-primary title is-4">77</span> aggregate
            percentage from year
            <span class="has-text-primary title is-4">2012</span>
            to
            <span class="has-text-primary title is-4">2011</span>.
          </p>
        </div>
        <div class="sss-table table">
          <Table v-bind:tableData="sss" />
        </div>
      </div>
    </Accordion>

    <Accordion class="ss-accordion accordion" title="Secondary School">
      <div class="ss-content content">
        <div class="ss-info info content is-medium">
          <p>
            <span class="has-text-primary title is-4">Matriculation</span>
            from
            <span class="has-text-primary title is-4">Kendriya Vidyalaya</span>
            Number 1, Delhi Cantt. with
            <span class="has-text-primary title is-4">7.6</span> CGPA from year
            <span class="has-text-primary title is-4">2009</span>
            to
            <span class="has-text-primary title is-4">2010</span>.
          </p>
        </div>
        <div class="ss-table table">
          <Table v-bind:tableData="grad" />
        </div>
      </div>
    </Accordion>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import Accordion from "../components/shared/Accordion";
import Table from "../components/shared/Table";

export default Vue.extend({
  name: "Education",
  components: {
    Accordion,
    Table,
  },
  data() {
    return {
      grad: {
        head: ["Semester", "Percentage"],
        row: [
          ["I", "74.00%"],
          ["II", "67.70%"],
          ["III", "65.90%"],
          ["IV", "60.70%"],
          ["V", "58.60%"],
          ["VI", "61.80%"],
          ["VII", "61.50%"],
          ["VIII", "68.80%"],
        ],
      },
      sss: {
        head: ["Subject", "Marks"],
        row: [
          ["English", "87"],
          ["Mathematics", "73"],
          ["Physics", "71"],
          ["Chemistry", "74"],
          ["Computer Science", "80"],
        ],
      },
      ss: {
        head: ["Subject", "CGPA"],
        row: [
          ["English", "7"],
          ["Hindi", "8"],
          ["Mathematics", "7"],
          ["Science", "8"],
          ["Social Science", "8"],
        ],
      },
    };
  },
});
</script>
