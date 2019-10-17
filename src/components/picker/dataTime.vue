<template>
    <div>
         <van-cell :title="title" is-link :value="value | dateFormat" @click="show=true"/>
         <van-popup
            v-model="show"
            position="bottom">
            <transition name="van-slide-up">
            <van-datetime-picker 
                v-if="show"
                v-model="defaultDate"
                type="date"
                :min-date="minDate"
                :formatter="formatter"
                @cancel="cancel"
                @confirm="confirm"
            />
            </transition>
        </van-popup>
    </div>    
</template>

<script>
import {dateFormat} from '@/utils/mixins'
export default {
    name:"dataTime",
    mixins:[dateFormat],
    data(){
        return {
            show:false,
            defaultDate:new Date(),
            minDate:new Date(1900, 10, 1),
            currentDate:new Date(),
            cancel:()=>{
                this.show = false;
                this.defaultDate = this.value;
            },
            confirm:(value)=>{
                this.defaultDate = value;
                this.$emit("input",value);
                this.show = false;
            }
        }
    },
    props:["value","title"],
    methods:{
        formatter(type, value) {
            if (type === 'year') {
                return `${value}年`;
            } else if (type === 'month') {
                return `${value}月`
            }else if (type === 'day') {
                return `${value}日`
            }
            return value;
        },
    }
}
</script>

<style>

</style>