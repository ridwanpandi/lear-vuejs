<template>
    <div>
        <b-jumbotron  v-bind:header="getTitle" lead="Belajar Vue JS" >
        <b-btn variant="primary" href="javascript:changeTitle('Title Dari Vuex')"  >Ubah Judul</b-btn>
        </b-jumbotron>
        <button @click="changeTitle('Judul diubah')">Ubah Judul</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: this.$store.getters.getTitle,
        }
    },
    computed: {
        getTitle(){
            return  this.$store.getters.getTitle
        }
    },
    methods: {
        changeTitle: function (newTitle) {
            console.log(newTitle);
            this.$store.dispatch("changeTitle", newTitle);
        }
    }
}
</script>

<style>

</style>
