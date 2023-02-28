<template>
    <div>
        <ul>
            <li v-for="tag in tags">
                <input type="checkbox" :name=tag :id=tag @change="checkFilter($event)">
                <label :for=tag>{{ tag }}</label>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Filter",emits:["check-filter"],
    data() {
        return {
            tags: ["Open_World","Story_Rich","Adventure","Western","Survival",
                "Crafting","Multiplayer","PvP","Sandbox","Funny","Moddeable",
                "Mod","Zombies","2D","Pirates","RPG","Post-apocalyptic",
                "Singleplayer","FPS","Hero_Shooter","Tactical"],

            checkFiltersValues: []
        }
    },
    methods: {
        checkFilter(event) {
            if (event.target.checked === true) {
                this.checkFiltersValues.push(event.target.id)
            }else{
                this.checkFiltersValues=this.checkFiltersValues.filter(tag=>tag!=event.target.id)
            }
            this.$emit("check-filter",this.checkFiltersValues)
            console.log(this.checkFiltersValues)
        }
    }
}
</script>