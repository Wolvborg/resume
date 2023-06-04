<template>
  <div id="app">
    <section id="header" class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">Abhishek Saini</h1>
        </div>
      </div>
    </section>

    <section id="main-content" class="container">
      <div class="showing" v-if="isAuthenticated">
        <div class="columns">
          <div class="column is-8">
            <div class="box">
              <h2 class="title is-3">About Me</h2>
              <table class="table is-fullwidth is-hoverable">
                <tbody>
                  <tr>
                    <td class="has-text-weight-semibold">Date of Birth</td>
                    <td class="value">6th March 1995</td>
                  </tr>
                  <tr>
                    <td class="has-text-weight-semibold">Height</td>
                    <td class="value">5ft 7in</td>
                  </tr>
                  <tr>
                    <td class="has-text-weight-semibold">Weight</td>
                    <td class="value">65Kg</td>
                  </tr>
                  <tr>
                    <td class="has-text-weight-semibold">Highest Qualification</td>
                    <td class="value">B.Tech (CSE) 2017</td>
                  </tr>
                  <tr>
                    <td class="has-text-weight-semibold">College</td>
                    <td class="value">Noida Institute of Engineering & Technology</td>
                  </tr>
                  <tr>
                    <td class="has-text-weight-semibold">Senior High School</td>
                    <td class="value">Kendriya Vidyalaya-1 Delhi Cantt.</td>
                  </tr>
                  <tr>
                    <td class="has-text-weight-semibold">High School</td>
                    <td class="value">Kendriya Vidyalaya-1 Delhi Cantt.</td>
                  </tr>
                  <tr>
                    <td class="has-text-weight-semibold">Job Details</td>
                    <td class="value">
                      Working as an UI developer in Trek India, a subsidiary of Trek Bicycle
                      Corporation USA
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="box">
              <h2 class="title is-3">About Parents</h2>
              <table class="table is-fullwidth is-hoverable">
                <tbody>
                  <tr>
                    <td class="has-text-weight-semibold">Father's Name</td>
                    <td class="value">Virendra Kumar</td>
                  </tr>
                  <tr>
                    <td class="has-text-weight-semibold">Mother's Name</td>
                    <td class="value">Anita Saini</td>
                  </tr>
                  <tr>
                    <td class="has-text-weight-semibold">Father's Occupation</td>
                    <td class="value">
                      Assitant Bank Maneger in Punjab National Bank, New Delhi. Served In Indian Air
                      Force for 20 Years
                    </td>
                  </tr>
                  <tr>
                    <td class="has-text-weight-semibold">Father Qualification</td>
                    <td class="value">B.Tech (CSE) 2017</td>
                  </tr>
                  <tr>
                    <td class="has-text-weight-semibold">Mother's Occupation</td>
                    <td class="value">Homemaker</td>
                  </tr>
                  <tr>
                    <td class="has-text-weight-semibold">Mother's Qualification</td>
                    <td class="value">BA in Home Science</td>
                  </tr>
                  <tr>
                    <td class="has-text-weight-semibold">High School</td>
                    <td class="value">Kendriya Vidyalaya-1 Delhi Cantt.</td>
                  </tr>
                  <tr>
                    <td class="has-text-weight-semibold">Job Details</td>
                    <td class="value">
                      Working as an UI developer in Trek India, a subsidiary of Trek Bicycle
                      Corporation USA
                    </td>
                  </tr>
                  <tr>
                    <td class="has-text-weight-semibold">Native Place</td>
                    <td class="value">Meerut</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="column is-4"><div class="box">Second column</div></div>
        </div>
      </div>
      <div class="hiding" v-else>
        <h1 class="title is-1">You don't have the correct password</h1>
      </div>
    </section>

    <footer id="footer" class="footer">
      <div class="content has-text-centered">
        <p class="has-text-white-ter">
          Made With <em class="heart">&hearts;</em> & <em class="bulma">Bulma</em> by Abhishek
          Saini.
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'App',
    data() {
      return {
        isAuthenticated: false,
      };
    },
    created() {
      const result = window.prompt('Enter the Password Provided');
      this.isAuthenticated = result === 'AnitaSaini';
    },
  });
</script>

<style lang="scss" scoped>
  @import '@/assets/style/globalVariable.scss';

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    user-select: none;

    #main-content {
      min-height: calc(100vh - 150px - 162px);
      padding: 1.5rem 1rem;
    }

    #footer {
      background-color: #212121;
      .heart {
        color: red;
        font-weight: 800;
      }

      .bulma {
        color: #00d1b2;
        font-weight: 800;
      }
    }
  }
</style>
