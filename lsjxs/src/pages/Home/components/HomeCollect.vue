<template>
    <div class="CollectList wrapper" ref="wrapper">
        <ul class="content">
            <div class="downLoad">
                <i v-if="loading==1||loading==2" class="iconfont iconjiantou-xia" :class="{roat180:loading==2}"></i>
                <i v-if="loading==3" class="iconfont iconzhongxinjiazai"></i>
                <i v-if="loading==4" class="iconfont iconchenggong"></i>
                <i v-if="loading==-1" class="iconfont icon71shibai"></i>
            </div>
            <slot></slot>
        </ul>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: '',
        components: {},
        directives: {},
        filters: {},
        extends: {},
        mixins: {},
        props: ['success','error'],
        data () {
            return {
                loading: 3,//1正在下拉  2正在上拉   3加载中    4加载成功    -1加载失败
                bscroll: null,
                is_Downinit: false
            }
        },
        computed: {},
        watch: {
            success(){
                this.finishPullDown();
            },
            error(){
                this.finishPullDown();
            }
        },
        beforeCreate () {
        // 生命周期钩子：组件实例刚被创建，组件属性计算之前，如 data 属性等
        },
        created () {
        // 生命周期钩子：组件实例创建完成，属性已绑定，但 DOM 还未生成，el 属性还不存在
        // 初始化渲染页面
        },
        beforeMount () {
        // 生命周期钩子：模板编译/挂载之前
        },
        mounted () {
        // 生命周期钩子：模板编译、挂载之后（此时不保证已在 document 中）
            this.initScroll();
        },
        beforeUpate () {
        // 生命周期钩子：组件更新之前
        },
        updated () {
        // 生命周期钩子：组件更新之后
        },
        activated () {
        // 生命周期钩子：keep-alive 组件激活时调用
        },
        deactivated () {
        // 生命周期钩子：keep-alive 组件停用时调用
        },
        beforeDestroy () {
        // 生命周期钩子：实例销毁前调用
        },
        destroyed () {
        // 生命周期钩子：实例销毁后调用
        },
        methods: {
            initScroll(){
                const wrapper = this.$refs.wrapper
                console.log(wrapper)
                this.bscroll = new BScroll(wrapper,{
                    probeType: 3,
                    scrollY: true,
                    click: true,
                    pullDownRefresh: {
                        threshold: 30, // 下拉距离超过30px触发pullingDown事件
                        stop: 26 // 回弹停留在距离顶部20px的位置
                    }
                })
                this.bscroll.autoPullDownRefresh()
                this.bscroll.on('scrollStart', () => {
                    this.loading = 1;
                    this.bscroll.finishPullDown();
                })
                this.bscroll.on('scrollEnd', () => {
                    this.bscroll.stop();
                })
                this.bscroll.on('touchEnd', () => {
                    this.bscroll.stop();
                })

                this.bscroll.on('scroll', (pos) => {
                    if(this.loading != 1){
                        return;
                    }
                    let tops = wrapper.offsetTop;
                    // 使用abs绝对值（否则 pos.y拿到值是负数）
                    let is_top = Math.abs(Math.round(pos.y));
                    if(this.loading==1&&is_top>=30){
                        console.log('箭头变向'+this.loading)
                        this.loading = 2;
                        this.bscroll.stop();
                    }
                })

                this.bscroll.on('pullingDown', () => {
                    this.loading = 3;
                    this.$emit('pullingDown');
                    // this.bscroll.finishPullDown();
                });
            },
            //请求成功或失败执行
            finishPullDown(){
                let that = this;
                if(this.success){
                    this.loading = 4;
                    setTimeout(()=>{
                        that.bscroll.finishPullDown(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
                    },500)
                    return false;
                }
                if(this.error){
                    this.loading = -1;
                    setTimeout(()=>{
                        that.bscroll.finishPullDown(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
                    },500)
                    return false;
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/styles.styl';
@import '//at.alicdn.com/t/font_1163411_zqhsbw3kvyq.css';
    .CollectList
        width 100%
        height 100%;
        .content
            width 100%
            position relative
            .downLoad
                width 100%
                height 30px
                font-size 30px
                color $bg1
                text-align center
                position absolute
                top -30px
                left 0
                right 0
                .iconfont
                    display block
                    font-size 30px
                .iconjiantou-xia
                    transition transform .2s
                .roat180
                    transform rotate(-180deg)
                .iconzhongxinjiazai
                    animation jiazai .8s infinite linear
                @keyframes jiazai {
                    0%{
                        transform: rotate(0)    
                    }
                    50%{
                        transform: rotate(-180deg)    
                    }
                    100%{
                        transform: rotate(-360deg)    
                    }
                }  
</style>
