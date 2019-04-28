<template>
    <swiper class="HomeSwiper" :options="swiperOption" ref="mySwiper" @slideChangeTransitionStart="_changeSwiperIndex">
        <!-- slides -->
        <swiper-slide>
            <slot name="collect"></slot>
        </swiper-slide>
        <swiper-slide>2
            <slot name="community"></slot>
        </swiper-slide>
        <swiper-slide>3
            <slot name="find"></slot>
        </swiper-slide>
    </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: '',
    components: {
        swiper,
        swiperSlide,
    },
    props: ['swiperindex'],
    data () {
        return {
            swiperOption: {
                touchRatio : 0.5,
                longSwipesRatio: 1,
                resistanceRatio: 0,
                initialSlide: 0
            }
        }
    },
    computed: {},
    watch: {
        swiperindex(newVal,oldVal){
            if(newVal != oldVal){
                let swiper = this.$refs.mySwiper.swiper;
                swiper.slideTo(newVal, 500, false);
            } 
        }
    },
    beforeCreate () {
    // 生命周期钩子：组件实例刚被创建，组件属性计算之前，如 data 属性等
    },
    created () {
    // 生命周期钩子：组件实例创建完成，属性已绑定，但 DOM 还未生成，el 属性还不存在
    // 初始化渲染页面
        this.swiperOption.initialSlide = this.swiperindex
    },
    beforeMount () {
    // 生命周期钩子：模板编译/挂载之前
    },
    mounted () {
    // 生命周期钩子：模板编译、挂载之后（此时不保证已在 document 中）
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
    errorCaptured (err, vm, info) {
    // 生命周期钩子：当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。
    console.log(err, vm, info)
    },
    methods: {
        _changeSwiperIndex(){
            let swiper = this.$refs.mySwiper.swiper;
            let i = swiper.activeIndex;
            this.$emit('changeSwiper',i);
        }
    }
}
</script>

<style lang="stylus" scoped>
    .HomeSwiper
        width 100%
        position fixed
        top 216px
        left 0
        right 0
        bottom 0
</style>

