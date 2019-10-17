<template>
    <transition name="van-slide-right">
    <div class="flex-wrap mask fullTimeJopExpe" v-if="value">
        <div class="main-wrap">
            <van-cell-group>
                <van-field label="服务机构名称" placeholder="请输入服务机构名称(必填)" />
                <van-field label="地点" placeholder="请输入地点(必填)" />
                <van-field label="职位" placeholder="请输入地点(必填)" />
                <van-cell title="开始时间" is-link value="" @click="jop1=true"/>
                <van-cell title="结束时间" is-link value="" @click="jop1=true"/>
                <van-field label="工作部门负责人" placeholder="请输入工作部门负责人(必填)" />
                <van-field label="电话" placeholder="请输入电话(必填)" />
                <van-field label="HR负责人" placeholder="请输入HR负责人(必填)" />
                <van-field label="电话" placeholder="请输入电话(必填)" />
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
// 全职工作简历
export default {
    name:"fullTimeJopExpe",
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
  .fullTimeJopExpe .van-field__label{
       width: 4.6rem;
   }
</style>