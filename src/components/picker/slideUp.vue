<template>
<div>
    <van-cell :title="title" is-link :value="value.label" @click="show=true" />
    <van-popup
            v-model="show"
            get-container="body"
            position="bottom">
            <transition name="van-slide-up">
            <van-picker
                v-if="show"
                show-toolbar
                :title="title"
                :default-index="defaultIndex"
                value-key="label"
                :columns="data"
                @cancel="show=false"
                @confirm="confirm"
                />
            </transition>    
    </van-popup>
</div>
</template>

<script>
import utils from '@/utils/'
export default {
    name:"slideUp",
    data(){
        return {
            defaultIndex:0,
            show:false
        }
    },
    created(){
        console.log(this.value)
        this.defaultIndex = utils.getArrIndex(this.data,'value',this.value.value);
    },
    props:["value","title","data"],
    methods:{
       confirm(value){
           this.$emit("input",value);
           this.show = false;
       } 
    }
}
</script>

<style>

</style>