<template>
  <div class="progress-bar" :style="{ left: position }"></div>
</template>

<script>
export default { 
    props: {
        progress: Number
    },
    computed: {
        position() {
            return (Math.min(1, this.progress || 0) * 100) + '%'
        }
    }
}
</script>

<style lang="scss" scoped>
.progress-bar {
    background-color: red;
    height: 100%;
    position: absolute;
    width: 2px;
}
</style>
