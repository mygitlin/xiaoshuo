<template>
    <div class="home-header">
        <div class="home-header-top">
            <div class="home-header-top-left">
                <span>追书神器</span>
            </div>
            <div class="home-header-top-right">
                <div class="home-header-top-right-icon">
                    <div class="iconBg" :class="[right_top==1?'iconfont-bg':'']"></div>
                    <div class="iconfont iconsousuo" @touchstart="_touchstart(1)"></div>                   
                </div>
                <div class="home-header-top-right-icon">
                    <div class="iconBg" :class="[right_top==2?'iconfont-bg':'']"></div>
                    <div class="iconfont icongengduo" @touchstart="_touchstart(2)"></div>                   
                </div>
            </div>
        </div>
        <div class="home-header-tabBar">
            <div :class="[select_tabBar == 0 ? 'home-header-tabBar-select': '']" @click="_handleTabBar(0)"><span>追书</span></div>
            <div :class="[select_tabBar == 1 ? 'home-header-tabBar-select': '']" @click="_handleTabBar(1)"><span>社区</span></div>
            <div :class="[select_tabBar == 2 ? 'home-header-tabBar-select': '']" @click="_handleTabBar(2)"><span>发现</span></div>
        </div>
        <div class="home-header-bottom" :class="[select_tabBar==0?'home-header-bottom-left1':select_tabBar==1?'home-header-bottom-left2':'home-header-bottom-left3']"></div>
    </div>
</template>

<script>
    export default {
        name: 'HomeHeader',
        props: ['swiperindex'],
        data(){
            return {
                select_tabBar: 0,
                right_top: 0
            }
        },
        watch: {
            swiperindex(newVal,oldVal){
                if(newVal != oldVal){
                    this.select_tabBar = newVal;
                }
            }
        },
        methods: {
            _handleTabBar(i){
                this.select_tabBar = i;
                this.$emit('changeIndex',i)
            },
            _touchstart(i){
                this.right_top = i;
                let that = this;
                setTimeout(() => {
                    that.right_top = 0;
                }, 1000);
            }
        },
        created () {
            this.select_tabBar = this.swiperindex
            this.$nextTick(() => {
                // 禁用右键
                document.oncontextmenu = new Function("event.returnValue=false");
                // 禁用选择
                document.onselectstart = new Function("event.returnValue=false");
            });
        }
    }
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/styles.styl';
@import '//at.alicdn.com/t/font_1163411_h5gt8vgtlu.css';
    .home-header
        height 216px
        background-color $bg1
        position relative
        .home-header-bottom
            display:block
            width:0
            height:0
            border-width:0 10px 10px
            border-style:solid
            border-color:transparent transparent #fff;/*透明 透明  黄*/
            position:absolute
            bottom -1px
            left 165px
            transition left .3s
        .home-header-bottom-left1
            left 165px
        .home-header-bottom-left2
            left 365px
        .home-header-bottom-left3
            left 565px
        .home-header-top
            height 106px
            display flex
            justify-content space-between
            overflow hidden
            .home-header-top-left
                flex 1
                height 100%
                font-size 36px
                color #fff
                padding-left 35px
                line-height 106px
            .home-header-top-right
                padding-right 10px
                display flex
                align-items center
                .home-header-top-right-icon
                    width 106px
                    height 100%
                    text-align center
                    position relative
                    .iconfont
                        height 100%
                        line-height 106px
                        font-size 35px
                        color #fff
                        font-weight 600
                        position absolute
                        top 0
                        left 0
                        right 0
                        z-index 1
                    .iconBg
                        width 100px
                        height 100px
                        border-radius 50%
                        background rgba(255,255,255,0)
                        opacity .2
                        position absolute
                        top 0
                        left -2px
                        transition all .2s
                    .iconfont-bg
                        width 140px
                        height 140px
                        border-radius 50%
                        background rgba(255,255,255,.9)
                        position absolute
                        top -20px
                        left -18px
        .home-header-tabBar
            height 110px
            padding 0 80px
            display flex
            justify-content center
            div
                flex 1
                height 100%
                font-size 28px
                color #fff
                text-align center
                line-height 110px
                opacity .5
                transition opacity .3s
            .home-header-tabBar-select
                opacity 1
</style>