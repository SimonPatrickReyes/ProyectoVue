<template>
    <div class="carousel">
        <slot></slot>
        <div class="carousel__buttons">
        <button @click="prev" class="prev">{{ "◂" }}</button>
        <button @click="next" class="next">{{ "▸" }}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        next() {
            this.$emit('next')
        },
        prev() {
            this.$emit('prev')
        }
    },
}

</script>
