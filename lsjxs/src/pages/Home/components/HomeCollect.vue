<template>
    <div class="CollectList wrapper" ref="wrapper">
        <ul class="content">
            <li>...</li>
            <li>...</li>
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
        props: {},
        data () {
            return {

            }
        },
        computed: {},
        watch: {},
        beforeCreate () {
        // 生命周期钩子：组件实例刚被创建，组件属性计算之前，如 data 属性等
        },
        created () {
        // 生命周期钩子：组件实例创建完成，属性已绑定，但 DOM 还未生成，el 属性还不存在
        // 初始化渲染页面
            const wrapper = this.$refs.wrapper
            const scroll = new BScroll(wrapper)
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
        methods: {}
    }
</script>

<style lang="stylus" scoped></style>
