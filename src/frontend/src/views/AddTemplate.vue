<template>
    <div class="container">
        <form @submit="postData" method="post">
            <div class="row">
                <div class="col-6 form-group">
                    Data
                </div>
                <div class="col-6">
                    <input type="text" name="data" v-model='data'>
                </div>
                <div class="col-6 form-group">
                    Placeholder
                </div>
                <div class="col-6">
                    <input type="text" name="placeholders" v-model='placeholders'>
                </div>
                <div class="col-6 form-group">
                    Medium Type
                </div>
                <div class="col-6">
                    <input type="text" name="mediumType" v-model='mediumType'>
                </div>
                <div class="col-12">
                    <button class="btn-primary" type="submit">Add</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { httpPost } from '@/utils/api'
export default {
    name: 'AddTemplate',
    data() {
        return {
            data: '',
            placeholders: '',
            mediumType: ''
        }
    },
    methods: {
        postData() {
            return httpPost(`/templates`, {
                data: 'lala',
                placeholders: '',
                mediumType: 'email'
            })
        }
    }
}
</script>
<style scoped>
</style>