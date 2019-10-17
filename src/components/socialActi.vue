<template>
    <transition name="van-slide-right">
    <div class="flex-wrap mask socialActi" v-if="value">
        <div class="main-wrap">
            <van-cell-group>
                <van-cell title="开始时间" is-link value="" @click="jop1=true"/>
                <van-cell title="结束时间" is-link value="" @click="jop1=true"/>
                <div class="grounp border--bottom  type1">
                    <van-cell title="社会实践实习或兼职的内容与成绩" is-link/>
                    <div class="summary"><span>篮球,足球</span></div>
                </div>
                <van-field label="证明人" placeholder="请输入证明人(必填)" />
                <van-field label="证明人联系电话" placeholder="请输入证明人联系电话(必填)" />
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
// 社会实践实习或兼职
export default {
    name:"socialActi",
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
    .socialActi .van-field__label{
       width: 4.6rem;
   }
</style>