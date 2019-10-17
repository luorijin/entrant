<template>
    <transition name="van-slide-right">
    <div class="flex-wrap mask" v-if="value">
        <div class="main-wrap">
            <van-cell-group>
                <van-cell title="职（执）业资格名称" is-link value="" @click="jop1=true"/>
                <van-cell title="职（执）业资格等级" is-link value="" @click="jop2=true"/>
                 <van-cell title="获取时间" is-link value="" @click="jop2=true"/>
            </van-cell-group>
        </div>
        <div class="btn-grounp">
            <van-button type="default" @click="back">取消</van-button>
            <van-button type="primary">确定</van-button>
        </div>
        <van-popup
            v-model="jop1"
            position="bottom">
            <van-picker
                show-toolbar
                title="标题"
                :columns="columns"
                @cancel="jop1=false"
                @confirm="onConfirm"
                />
        </van-popup>
        <van-popup
            v-model="jop2"
            position="bottom">
            <van-picker
                show-toolbar
                title="标题"
                :columns="columns"
                @cancel="jop2=false"
                @confirm="onConfirm"
                />
        </van-popup>    
    </div>
    </transition>
</template>

<script>
// 职（执）业资格
export default {
    name:"professionalQual",
    data(){
        return {
            jop1:false,
            jop2:false,
            columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
        }
    },
    props:['value'],
    methods: {
        back(){
            this.$emit("input",false);
        },
        onConfirm(value, index) {
        },
        onCancel() {
        }
    }
}
</script>

<style lang="less">
   
</style>