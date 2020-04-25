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

        <Accordion title="Senior Secondary High School">

        </Accordion>

        <Accordion title="High School">

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
        .grad-content {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: 20px;
            align-items: center;

            .grad-info {
                width: 70%;
                p{
                    line-height: 50px;
                }
            }

            .grad-table {
                width: 20%;
            }
        }
    }
</style>
