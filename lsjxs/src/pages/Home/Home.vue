<template>
    <div>
        <home-header :swiperindex = "swiperIndex" @changeIndex="getSwiperIndex"></home-header>
        <home-swiper :swiperindex = "swiperIndex" @changeSwiper="getSwiperIndex">
            <home-collect slot="collect"></home-collect>
        </home-swiper>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeCollect from './components/HomeCollect'
export default {
    name: 'Home',
    data () {
        return {
            swiperIndex: 2
        }
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeCollect
    },
    methods: {
        getSwiperIndex(i){
            this.swiperIndex = i;
        }
    }
}
</script>

<style scoped lang="stylus">
    
</style>    