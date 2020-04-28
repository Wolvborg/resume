<template>
    <div id="education">
        <Accordion class="grad" title="Graduation">
            <div class="grad-content">
                <div class="grad-info content is-medium">
                    <p>Bachelor of Technology in
                        <span class="has-text-primary title is-4">Computer Science & Engineering</span>
                        from
                        <span class="has-text-primary title is-4">Noida Institute of Engineering & Technology</span>
                        (<abbr title="Dr. A.P.J. Abdul Kalam Technical University">APJAKTU</abbr>)
                        from year
                        <span class="has-text-primary title is-4">2013</span>
                        to
                        <span class="has-text-primary title is-4">2017</span>
                        with
                        <span class="has-text-primary title is-4">63.85</span>
                        aggregate percentage.
                    </p>
                </div>
                <div class="grad-table">
                    <table class="table is-fullwidth">
                        <thead>
                        <tr>
                            <th class="has-text-primary">Semester</th>
                            <th class="has-text-primary">Percentage</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>I</td>
                            <td>74.00%</td>
                        </tr>
                        <tr>
                            <td>II</td>
                            <td>67.70%</td>
                        </tr>
                        <tr>
                            <td>III</td>
                            <td>65.90%</td>
                        </tr>
                        <tr>
                            <td>IV</td>
                            <td>60.70%</td>
                        </tr>
                        <tr>
                            <td>V</td>
                            <td>58.60%</td>
                        </tr>
                        <tr>
                            <td>VI</td>
                            <td>61.80%</td>
                        </tr>
                        <tr>
                            <td>VII</td>
                            <td>61.50%</td>
                        </tr>
                        <tr>
                            <td>VIII</td>
                            <td>68.80%</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Accordion>

        <Accordion class="sss" title="Senior Secondary School">
            <div class="sss-content">
                <div class="sss-info content is-medium">
                    <p>
                        <span class="has-text-primary title is-4">Science</span> as Core Stream from
                        <span class="has-text-primary title is-4">Kendriya Vidyalaya</span> Number 1, Delhi Cantt. with
                        <span class="has-text-primary title is-4">77</span> aggregate percentage
                        from year
                        <span class="has-text-primary title is-4">2012</span>
                        to
                        <span class="has-text-primary title is-4">2011</span>.
                    </p>
                </div>
                <div class="sss-table">
                    <table class="table is-fullwidth">
                        <thead>
                        <tr>
                            <th class="has-text-primary">Subject</th>
                            <th class="has-text-primary">Marks</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>English</td>
                            <td>87</td>
                        </tr>
                        <tr>
                            <td>Mathematics</td>
                            <td>73</td>
                        </tr>
                        <tr>
                            <td>Physics</td>
                            <td>71</td>
                        </tr>
                        <tr>
                            <td>Chemistry</td>
                            <td>74</td>
                        </tr>
                        <tr>
                            <td>Computer Science</td>
                            <td>80</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Accordion>

        <Accordion class="ss" title="Secondary School">
            <div class="ss-content">
                <div class="sss-info content is-medium">
                    <p>
                        <span class="has-text-primary title is-4">Matriculation</span>
                        from
                        <span class="has-text-primary title is-4">Kendriya Vidyalaya</span> Number 1, Delhi Cantt. with
                        <span class="has-text-primary title is-4">7.6</span> CGPA
                        from year
                        <span class="has-text-primary title is-4">2009</span>
                        to
                        <span class="has-text-primary title is-4">2010</span>.
                    </p>
                </div>
                <div class="sss-table">
                    <table class="table is-fullwidth">
                        <thead>
                        <tr>
                            <th class="has-text-primary">Subject</th>
                            <th class="has-text-primary">Marks</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>English</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>Hindi</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Mathematics</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>Science</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Social Studies</td>
                            <td>8</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Accordion>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Vue from 'vue'
    import Accordion from "../components/shared/Accordion";

    export default Vue.extend({
        name: 'Education',
        components: {
            Accordion
        }
    })
</script>

<style lang="scss" scoped>

    #education {
        .grad {
            transition: height 1s ease-in-out;


            .grad-content {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;

                .grad-info {
                    p {
                        line-height: 50px;
                    }
                }
            }
        }

        .sss {

            transition: height 1s ease-in-out;

            .sss-content {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;

                .grad-info {
                    p {
                        line-height: 50px;
                    }
                }
            }
        }

        .ss {

            transition: height 1s ease-in-out;

            .ss-content {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;

                .grad-info {
                    p {
                        line-height: 50px;
                    }
                }
            }
        }
    }
</style>
