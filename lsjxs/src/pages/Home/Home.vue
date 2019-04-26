<template>
    <div>
        <home-header :swiperindex = "swiperIndex" @changeIndex="getSwiperIndex"></home-header>
        <home-swiper :swiperindex = "swiperIndex" @changeSwiper="getSwiperIndex"></home-swiper>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
export default {
    name: 'Home',
    data () {
        return {
            swiperIndex: 2
        }
    },
    components:{
        HomeHeader,
        HomeSwiper
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