<template>
    <div class="searchBar">
        <input type="text" v-model="search">
    </div>
</template>
<script>
export default {
    name: "SearchBar", emits: ["check-searchBar"],
    data() {
        return {
            search:"",

        }
    },

    watch:{
        search(newSearch,oldSearch){
            this.$emit("check-searchBar", newSearch)
        }
    },  


    methods: {
        
        checkSearchBar(event) {
            if (event) {
                this.checkSearchValue.push(event.target.id)
            } else {
                this.checkSearchValue = this.checkSearchValue.filter(title => title != event.target.id)
            }
            this.$emit("check-searchBar", this.checkSearchValue)
        }
    }
}
</script>

