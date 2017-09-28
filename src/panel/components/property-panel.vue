<template>
    <div class="property-panel">
        <div v-for="prop in animationProps" :key="prop.name">
            <div class="property-group">
                <select class="type-select" v-model="prop.type">
                    <option v-for="tpe in dataTypes" :key="tpe.value" :value="tpe.value">{{tpe.text}}</option>
                </select>
                <input type="text" v-model="prop.value" />
                <button-icon icon-name="contextMenu" type="flat" />
            </div>
        </div>
    </div>
</template>

<script>
import ButtonIcon from './button-icon'

export default {
    components: {
        ButtonIcon
    },
    data() {
        return {
            animationProps: [
                { name: 'x', value: '', type: 'length' },
                { name: 'y', value: '', type: 'length' },
                { name: 'opacity', value: '', type: 'number' },
                { name: 'scale', value: '', type: 'number' },
                { name: 'rotateZ', value: '', type: 'angle' },
                { name: 'innerHTML', value: '', type: 'any' },
                { name: 'viewBox', value: '', type: 'viewbox' },
                { name: 'd', value: '', type: 'path' },
                { name: 'color', value: '', type: 'color' },
                { name: 'background-color', value: '', type: 'color' },
                { name: 'transform-origin', value: '', type: 'any' },
            ],
            dataTypes: [
                { value: 'any', text: '(any)' },
                { value: 'angle', text: 'Angle' },
                { value: 'color', text: 'Color' },
                { value: 'path', text: 'Path' },
                { value: 'length', text: 'Length' },
                { value: 'number', text: 'Number' },
                { value: 'viewbox', text: 'ViewBox' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixins/flex.scss';

.property-panel {
    height: 100%;
}

.property-group {
    display: flex;
    justify-content: space-between;
}

.type-select {
    width: 80px;
}

</style>
