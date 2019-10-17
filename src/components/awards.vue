<template>
    <transition name="van-slide-right">
    <div class="flex-wrap mask" v-if="value">
        <div class="main-wrap">
            <van-cell-group>
                <van-cell title="获奖时间" is-link value="" @click="jop1=true"/>
                <van-field label="奖项名称" placeholder="请输入证明人(必填)" />
                <van-field label="颁奖单位" placeholder="请输入证明人联系电话(必填)" />
            </van-cell-group>
        </div>
        <div class="btn-grounp">
            <van-button type="default">取消</van-button>
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
// 获奖情况
export default {
    name:"awards",
    data(){
        return {
            jop1:false,
            jop2:false,
            columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
        }
    },
    props:['value'],
    methods: {
        onConfirm(value, index) {
        },
        onCancel() {
        }
    }
}
</script>

<style lang="less">
</style>