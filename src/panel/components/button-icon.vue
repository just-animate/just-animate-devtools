<template>
    <svg class="base-icon" :class="type" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <use :href="'#icon_' + iconName" />
    </svg>
</template>

<script>
export default {
    props: {
        iconName: String,
        type: String
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
$iconSize: 13px;

.base-icon {
    cursor: pointer;
    height: $iconSize;
    margin: 2px;
    padding: 5px 10px;
    position: relative;
    transform: scale(1);
    transition-property: transform;
    transition-duration: 300ms;
    width: $iconSize;
    z-index: 1;
    &:hover {
        transform: scale(1.1);
        z-index: 2;
    } 
    
    // &.flat { }
    &.normal {
        background-color: $buttonBg;
        fill: $buttonFg;
        border: solid thin darkgray;
        border-radius: 5px;
    }
}
</style>
