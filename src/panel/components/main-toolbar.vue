<template>
    <div class="main-toolbar">
        <div class="left-panel">
            <button-icon icon-name="plus" type="flat" />
            <timeline-selector />
            <div class="player-controls">
                <button-icon icon-name="play" type="normal" />
                <button-icon icon-name="pause" type="normal" />
                <button-icon icon-name="stop" type="normal" />
                <button-icon icon-name="reverse" type="normal" />
            </div>
            <button-icon icon-name="contextMenu" type="flat" />
        </div>
        <div class="center-panel">
            <progress-bar :progress="progress" />
        </div>
        <div class="right-panel">
            <range-selector />
            <rate-selector />
            <button-icon icon-name="download" type="normal" />
        </div>
    </div>
</template>

<script>
import ButtonIcon from './button-icon'
import ProgressBar from './progress-bar'
import RateSelector from './rate-selector'
import RangeSelector from './range-selector'
import TimelineSelector from './timeline-selector'

export default {
    components: {
        ButtonIcon, ProgressBar, RangeSelector, RateSelector, TimelineSelector
    },
    data() {
        return {
            progress: 0
        }
    }
}
</script>

<style lang="scss" scoped> 
@import '../styles/mixins/flex';

.main-toolbar {
    align-items: stretch; 
    display: flex; 
    justify-content: space-between; 
    position: relative;
}

.player-controls {
    display: flex;
}

.center-panel {
    @include flex-auto();
}

.left-panel,
.right-panel {
    @include flex-fixed(280px);

    align-items: center; 
    display: flex;
    justify-content: space-around;
}
</style>
