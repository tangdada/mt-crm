<template>
    <div class="app">
        <button @click="showMenu" class="btn">{{text}}</button>
        <transition name="move">
            <div class="menu" v-show="show">
                <div class="inner inner-1">1</div>
                <div class="inner inner-2">2</div>
                <div class="inner inner-3">3</div>
            </div>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        data () {
            return {
                show: false
            };
        },
        methods: {
            showMenu () {
                this.show = !this.show;
            }
        },
        computed: {
            text () {
                return this.show ? '收' : '开';
            }
        }
    };
</script>

<style lang="stylus" src="./transition.styl"></style>
