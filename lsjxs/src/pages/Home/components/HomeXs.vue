<template>
    <li class="xiaoshuo" @click="_handleXianShuo()">
        <img class="xiaoshuo-img" :src="book.book_img"/>
        <div class="xiaoshuo-info">
            <p class="xiaoshuo-name">{{book.bookName}}</p>
            <p class="xiaoshuo-desc">{{book.new_book_z}}</p>
        </div>
    </li>
</template>

<script>
export default {
    name: '',
    components: {},
    directives: {},
    filters: {},
    extends: {},
    mixins: {},
    props: ['item'],
    data () {
        return {
            book:{}
        }
    },
    computed: {},
    watch: {},
    beforeCreate () {
    // 生命周期钩子：组件实例刚被创建，组件属性计算之前，如 data 属性等
    },
    created () {
    // 生命周期钩子：组件实例创建完成，属性已绑定，但 DOM 还未生成， 属性还不存在
    // 初始化渲染页面
        // console.log(this.item)
        this.book = this.item;
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
        _handleXianShuo(){
            console.log('看小说')
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/styles.styl';
    .xiaoshuo
        width 100%
        height 151px
        display flex
        .xiaoshuo-img
            flex-shrink 0
            display block
            width 77px
            height 102px
            margin 23px 0 0 30px
            border-radius 5px
        .xiaoshuo-info
            margin-left 30px
            flex 1
            height 100%
            border-bottom 2px solid #f3f3f3
            display flex
            flex-direction column
            justify-content center
            box-sizing border-box
            .xiaoshuo-name
                font-size 28px
                color $color1
                text_overflow1()
            .xiaoshuo-desc
                margin-top 18px
                font-size 20px
                color $color2
                text_overflow1()
</style>
