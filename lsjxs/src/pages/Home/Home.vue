<template>
    <div>
        <home-header :swiperindex = "swiperIndex" @changeIndex="getSwiperIndex"></home-header>
        <home-swiper :swiperindex = "swiperIndex" @changeSwiper="getSwiperIndex">
            <home-collect slot="collect" :success="collect_success" :error="collect_error" @pullingDown="getCollectList">
                <home-xs slot="list" v-for="item in collectList" :key="item.id" :item="item"></home-xs>
                <template slot="add">
                    <li class="xiaoshuo2" @click="_handleAddBook">
                        <i class="xiaoshuo-img2 iconfont icontianjia"></i>
                        <div class="xiaoshuo-info2">
                            <p class="xiaoshuo-desc2">添加你喜欢的小说</p>
                        </div>
                    </li>
                </template>
            </home-collect>
        </home-swiper>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeCollect from './components/HomeCollect'
import HomeXs from './components/HomeXs'
export default {
    name: 'Home',
    data () {
        return {
            swiperIndex: 0,
            collectList:[],
            collect_success: false,
            collect_error: false,
            collect_isget: true
        }
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeCollect,
        HomeXs
    },
    methods: {
        //添加新小说
        _handleAddBook(){
            this.swiperIndex = 2
        },
        getSwiperIndex(i){
            this.swiperIndex = i;
        },
        //获取收藏列表
        getCollectList(){
            if(!this.   collect_isget){
                return false;
            }
            let that = this;
            this.collect_isget=false;
            this.collect_success=false;
            this.collect_error=false;
            this.$axios.get('/static/api/collectList.json')
            .then(function (response) {
                console.log(response);
                that.collectList = response.data.list
                console.log(that.collectList)
                that.collect_isget = true;
                setTimeout(()=>{
                    that.collect_success=true;
                },400)
            })
            .catch(function (error) {
                console.log(error);
                that.collect_isget = true;
                setTimeout(()=>{
                    that.collect_error=true;
                },400)
            });
            
        }
    },
    created () {
        this.getCollectList();
    }
}
</script>

<style scoped lang="stylus">
    @import '//at.alicdn.com/t/font_1163411_yzeyeifv4ye.css';
    .xiaoshuo2
        width 100%
        height 151px
        display flex
        .xiaoshuo-img2
            flex-shrink 0
            display block
            width 77px
            height 102px
            margin 23px 0 0 30px
            border-radius 5px
            font-size 40px
            text-align center
            line-height 124px
        .xiaoshuo-info2
            margin-left 30px
            flex 1
            height 100%
            border-bottom 2px solid #f3f3f3
            display flex
            flex-direction column
            justify-content center
            box-sizing border-box
            .xiaoshuo-desc2
                margin-top 18px
                font-size 20px
                color $color1
</style>    