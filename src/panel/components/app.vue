<template>
    <div id="app">
        <icon-defs />
        <div class="toolbar paper level-1">
            <main-toolbar />
        </div>
        <div class="scroll-container">
            <div class="left-panel">
                <target-panel />
            </div>
            <div class="center-panel">
                <progress-bar :progress="progress" />
            </div>
            <div class="right-panel">
                <property-panel />
            </div>
        </div>
    </div>
</template>

<script> 
import IconDefs from './icon-defs'
import MainToolbar from './main-toolbar'
import ProgressBar from './progress-bar'
import PropertyPanel from './property-panel' 
import TargetPanel from './target-panel'

export default {
    components: { 
        IconDefs,
        MainToolbar,
        ProgressBar,
        PropertyPanel,
        TargetPanel
    },
    data() {
        return {
            progress: 0
        }
    }
}
</script>

<style lang="scss">
// import base styles
@import '../styles/themes/submarine.scss';
@import '../styles/base/shadows.scss';
</style>

<style lang="scss" scoped> 
@import '../styles/mixins/flex';

#app {
    @include flex-fill-container(column);
    justify-content: space-between;
}

.scroll-container {
    @include flex-fill-container(row);
    overflow: hidden;
}

.left-panel,
.right-panel {
    @include flex-fixed(280px);
}

.center-panel {
    @include flex-auto();
}

.toolbar {
    @include flex-fixed(2.15rem);
    background-color: hsla(0, 0%, 94%, 1);
}
</style>
