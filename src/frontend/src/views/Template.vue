<template>
    <div class="about">
        <div class="container">
            <router-link to="/templates/add">+Add</router-link>
            {{ data }}
            <div class="container" id="">
                <div id="v-for-object">
                    <table>
                        <thead>
                            <tr>
                                <td>Sr No.</td>
                                <td>Data</td>
                                <td>Placeholder</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="template in templates" v-bind:key="template">
                                <td>{{ template.data }}</td>
                                <td>{{ template.placeholders }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import { httpGet } from '@/utils/api'

export default {
    name: 'Template',
    mounted() {
        httpGet('/templates').then(response => (this.templates = response))
    },
    data: function() {
        return {
            templates: [{
                data: 'helo',
                placeholders: 'belo'
            }]
        }
    }
}
</script>
<style>
</style>