<template>
    <transition name="van-slide-right">
    <div class="flex-wrap mask" v-if="value">
        <div class="main-wrap">
            <van-cell-group>
                <van-cell title="学习阶段" is-link value="" @click="jop1=true"/>
                <van-cell title="开始时间" is-link value="" @click="jop2=true"/>
                <van-cell title="结束时间" is-link value="" @click="jop2=true"/>
                <van-field label="毕业学校" placeholder="请输入毕业学校(必填)" />
                <van-field label="专业" placeholder="请输入专业(必填)" />
                 <van-cell title="学习成绩" is-link value="" @click="jop2=true"/>
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
// 教育经历
export default {
    name:"eduExperience",
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