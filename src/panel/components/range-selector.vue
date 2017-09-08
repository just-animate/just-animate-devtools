<template>
    <div class="range-selector">
        <input type="number" step="1" placeholder="0" />
        <span>of</span>
        <input type="number" step="1" placeholder="1000" />
    </div>
</template>

<script>
export default { 
}
</script>

<style lang="scss" scoped>
.range-selector {
    >* {
        margin-left: 4px;
        margin-right: 4px;
        vertical-align: middle;
    }
    >input {
        width: 65;
    }
}
</style>
