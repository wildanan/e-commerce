<template>
    <div style="border: 3px solid blue">
        <input v-model="isi" style="border: 1px solid black" type="text">
        <input @click="changeIsi" style="background-color:grey; cursor:pointer" type="submit" value="Change!">

        <div style="margin-bottom:30px; display:flex; justify-content: center">
            <!-- ini props -->
            <card v-for="(i, index) in 10" :key="index" v-bind:text="isi"/>
        </div>
    </div>
</template>

<script>
import card from './card'
export default {
    components: {
        card
    },
    data(){
        return {
            isi : ''
        }
    },
    methods: {
        changeIsi() {
            console.log(this.isi)
            this.$emit('tes', this.isi)
        }
    }
}
</script>

<style scoped>

</style>
