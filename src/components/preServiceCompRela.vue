<template>
    <transition name="van-slide-right">
    <div class="flex-wrap mask preServiceCompRela" v-if="value">
        <div class="main-wrap">
            <van-cell-group>
                <van-field label="单位（一）" placeholder="请输入单位(必填)" />
                <van-field label="工作部门负责人" placeholder="请输入工作部门负责人(必填)" />
                <van-field label="电话" placeholder="请输入电话(必填)" />
                <van-field label="HR负责人" placeholder="请输入HR负责人(必填)" />
                <van-field label="电话" placeholder="请输入电话(必填)" />
            </van-cell-group>
            <div class="line"></div>
             <van-cell-group>
                <van-field label="单位（二）" placeholder="请输入单位(必填)" />
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
    </div>
    </transition>
</template>

<script>
// 服务机构相关信息
export default {
    name:"preServiceCompRela",
    data(){
        return {
            jop1:false,
        }
    },
    props:['value'],
    methods:{
        back(){
            this.$emit("input",false);
        }
    }
}
</script>

<style lang="less">
    .preServiceCompRela .van-field__label{
       width: 4.6rem;
   }
   .preServiceCompRela .line{
       height: 0.2rem;
       background: #f4f4f4;
       margin: 0 -0.6rem;
   }
</style>