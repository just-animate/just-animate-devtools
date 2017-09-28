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
 $iconSize: 13px;

 .base-icon {
     cursor: pointer;
     height: 1rem;
     position: relative;
     transform: scale(1);
     transition-property: transform;
     transition-duration: 300ms;
     width: $iconSize;
     z-index: 1;

     &:hover {
         transform: scale(1.1);
         z-index: 2;
     } // &.flat { }
     &.normal {
         border-radius: 5px;
     }
 }
</style>
