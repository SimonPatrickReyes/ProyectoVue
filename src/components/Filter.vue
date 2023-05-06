<template>
    <div class="filters">
        <ul class="filters__ul">
            <p class="filters__p">Filtrar por categoria</p>
            <li v-for="tag in tags" class="filters__li">
                <input type="checkbox" :name=tag :id=tag @change="checkFilter($event)">
                <label :for=tag>{{ replaceCharacters(tag) }}</label>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Filter", emits: ["check-filter"],
    data() {
        return {
            tags: ["Open_World", "Story_Rich", "Adventure", "Western", "Survival",
                "Crafting", "Multiplayer", "PvP", "Sandbox", "Funny", "Moddeable",
                "Mod", "Zombies", "2D", "Pirates", "RPG", "Post-apocalyptic",
                "Singleplayer", "FPS", "Hero_Shooter", "Tactical", "Action",
                "Sci-fi", "Classic", "Shooter", "Competitive", "Crime", "Farming", "Co-op"],

            checkFiltersValues: []
        }
    },
    methods: {
        replaceCharacters(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).replace('_', ' ');
        },
        checkFilter(event) {
            if (event.target.checked === true) {
                this.checkFiltersValues.push(event.target.id)
            } else {
                this.checkFiltersValues = this.checkFiltersValues.filter(tag => tag != event.target.id)
            }
            this.$emit("check-filter", this.checkFiltersValues)
            console.log(this.checkFiltersValues)
        }
    }
}
</script>

