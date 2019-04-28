<template>
    <div>
        <home-header :swiperindex = "swiperIndex" @changeIndex="getSwiperIndex"></home-header>
        <home-swiper :swiperindex = "swiperIndex" @changeSwiper="getSwiperIndex">
            <home-collect slot="collect" :success="collect_success" :error="collect_error" @pullingDown="getCollectList">
                <home-xs v-for="item in collectList" :key="item.id" :item="item"></home-xs>
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
                },800)
            })
            .catch(function (error) {
                console.log(error);
                that.collect_isget = true;
                setTimeout(()=>{
                    that.collect_error=true;
                },800)
            });
            
        }
    },
    created () {
        this.getCollectList();
    }
}
</script>

<style scoped lang="stylus">
    
</style>    