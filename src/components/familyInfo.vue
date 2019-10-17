<template>
    <transition name="van-slide-right">
    <div class="flex-wrap mask" v-if="value">
        <div class="main-wrap">
            <van-cell-group>
               <van-field label="姓名" placeholder="请输入姓名(必填)" />
                <van-cell title="关系" is-link value="" @click="jop1=true"/>
                <van-field label="工作单位" placeholder="请输入工作单位(必填)" />
                <van-field label="联系电话" placeholder="请输入联系电话(必填)" />  
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
// 家庭情况
export default {
    name:"familyInfo",
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