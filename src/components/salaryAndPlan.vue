<template>
    <transition name="van-slide-right">
    <div class="flex-wrap mask salaryAndPlan" v-if="value">
        <div class="main-wrap">
            <van-cell-group>
                <div class="grounp border--bottom  type1">
                    <h4>请依次选出三项能够影响您选择工作的关键因素</h4>
                    <van-cell title="第1关键因素" is-link value="A. 个人职业前途"/>
                    <van-cell title="第2关键因素" is-link value="A. 个人职业前途" @click="jop2=true"/>
                    <van-cell title="第3关键因素" is-link  value="A. 个人职业前途" @click="jop2=true"/>
                </div>
                <div class="grounp border--bottom  type1">
                    <h4>请依次选出三项您最希望从企业中得到的</h4>
                    <van-cell title="第1项" is-link value="A.较高的薪酬待遇" @click="jop2=true"/>
                    <van-cell title="第2项" is-link value="A.较高的薪酬待遇" @click="jop2=true"/>
                    <van-cell title="第3项" is-link value="A.较高的薪酬待遇" @click="jop2=true"/>
                </div>
                <div class="grounp border--bottom  type1">
                    <h4>未来三年内您期望获得的年薪水平是</h4>
                    <van-radio-group v-model="radio">
                        <van-radio name="1">A、约8万元</van-radio>
                        <van-radio name="2">B、约10万元</van-radio>
                         <van-radio name="3">C、约15万元</van-radio>
                        <van-radio name="4">D、约20万元</van-radio>
                         <van-radio name="5">D、20万元以上</van-radio>
                    </van-radio-group>
                </div>
                <div class="grounp border--bottom  type1">
                    <van-cell title="请简要说明您应聘泰豪公司的原因：" is-link/>
                    <div class="summary"><span>公司有发展前途</span></div>
                </div>
                 <div class="grounp border--bottom  type1">
                    <van-cell title="请描述您未来的职业发展计划：" is-link/>
                    <div class="summary"><span>公司有发展前途</span></div>
                </div>
                 <div class="grounp border--bottom  type1">
                    <van-cell title="请补充您认为需要让本公司了解的其他个人情况：" is-link/>
                    <div class="summary"><span>公司有发展前途</span></div>
                </div>
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
// 薪酬期望及职业规划
export default {
    name:"salaryAndPlan",
    data(){
        return {
            radio:"1",
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
   .salaryAndPlan {
       h4{
           margin-bottom: 0;
       }
       .main-wrap .van-radio-group{
            padding-top: 1rem;
            margin-bottom: 0.35rem;
            display: inline-block;
            div.van-radio{
                margin-left: 0;
                margin-bottom: 0.5rem;
                float: left;
                width: 50%;
                &:nth-child(even){
                    justify-content: flex-end;
                }
            }
        }
   }
</style>