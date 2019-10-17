<template>
    <transition name="van-slide-right">
    <div class="flex-wrap mask basicInfo" v-if="value">
        <div class="main-wrap">
            <van-cell-group>
                <van-field label="姓名" placeholder="请输入姓名(必填)" />
                <van-cell title="我是">
                    <van-radio-group slot="right-icon" v-model="radio">
                        <van-radio name="1">女</van-radio>
                        <van-radio name="2">男</van-radio>
                    </van-radio-group>
                </van-cell>
                <picker title="婚姻状况" v-model="wed" :data="pickerData.wedCol" />
                <dateTimePicker title="出生日期" v-model="currentDate" />
                <van-cell title="籍贯" is-link value="" @click="nativePlace.show=true"/>
                <van-cell title="民族" is-link value="" @click="folk.show=true"/>
                <van-field label="身份证号" placeholder="请输入身份证号(必填)" />
                <van-cell title="政治面貌" is-link value="" @click="political.show=true"/>
                <div class="grounp border--bottom  type1">
                    <van-cell title="爱好/特长" is-link @click="jop1=true"/>
                    <div class="summary"><span>篮球,足球</span></div>
                </div>
                <van-cell title="可到岗时间" is-link value="" @click="marSta.show=true"/>
                <van-field label="家庭住址" placeholder="请输入家庭住址(必填)" />
                <van-field label="通讯地址" placeholder="请输入通讯地址(必填)" />
                <van-field label="移动电话" placeholder="请输入移动电话" />
                <van-field label="电子邮箱" placeholder="请输入电子邮箱" />
                <van-field label="紧急联系人姓名" placeholder="请输入姓名" />
                <van-field label="身高（cm）" placeholder="请输入身高" />
                <van-field label="体重（kg）" placeholder="请输入体重" />
                <van-cell title="血型" is-link value="" @click="marSta.show=true"/>
                <van-cell title="健康状况" is-link value="" @click="marSta.show=true"/>
                <van-cell title="重大手术或疾病史">
                    <van-radio-group slot="right-icon" v-model="radio">
                        <van-radio name="1">有</van-radio>
                        <van-radio name="2">无</van-radio>
                    </van-radio-group>
                </van-cell>
                <van-cell title="传染病史">
                    <van-radio-group slot="right-icon" v-model="radio">
                        <van-radio name="1">有</van-radio>
                        <van-radio name="2">无</van-radio>
                    </van-radio-group>
                </van-cell>
            </van-cell-group>
        </div>
        <div class="btn-grounp">
            <van-button type="default" @click="back">取消</van-button>
            <van-button type="primary">确定</van-button>
        </div>
        <van-popup
            v-model="marSta.show"
            position="bottom">
            <transition name="van-slide-up">
            <van-picker
                v-if="marSta.show"
                show-toolbar
                title="婚姻状况"
                :columns="marSta.columns"
                @cancel="marSta.show=false"
                @confirm="marSta.confirm"
                />
            </transition>    
        </van-popup>
        <van-popup
            v-model="folk.show"
            position="bottom">
            <transition name="van-slide-up">
            <van-picker
                v-if="folk.show"
                show-toolbar
                title="民族"
                :columns="folk.columns"
                @cancel="folk.show=false"
                @confirm="folk.confirm"
                />
            </transition>    
        </van-popup>
        <van-popup
            v-model="political.show"
            position="bottom">
            <transition name="van-slide-up">
            <van-picker
                v-if="political.show"
                show-toolbar
                title="民族"
                :columns="political.columns"
                @cancel="political.show=false"
                @confirm="political.confirm"
                />
            </transition>    
        </van-popup>
        <van-popup
            v-model="birthday.show"
            position="bottom">
            <transition name="van-slide-up">
            <van-datetime-picker 
                v-if="birthday.show"
                v-model="birthday.default"
                type="date"
                :min-date="birthday.minDate"
                :formatter="formatter"
                @cancel="birthday.cancel"
                @confirm="birthday.confirm"
            />
            </transition>
        </van-popup>
        <van-popup
            v-model="nativePlace.show"
            position="bottom">
            <van-area :area-list="nativePlace.areaList" :cancel="nativePlace.cancel" :columns-num="2" title="籍贯选择" 
                @cancel="nativePlace.show=false"
                @confirm="nativePlace.confirm"
            />
        </van-popup>    
    </div>
    </transition>
</template>

<script>
// 基本信息
import areaList from '@/mock/arealist'
import wedCol from '@/mock/web'
import {dateFormat} from '@/utils/mixins'
import picker from '@/components/picker/slideUp.vue'
import dateTimePicker from '@/components/picker/dataTime.vue'
export default {
    name:"basicInfo",
    mixins:[dateFormat],
    data(){
        return {
            pickerData:{
                wedCol:wedCol
            },
            jop1:false,
            jop2:false,
            radio:"2",
            wed: {
                label: "未婚",
                value: "1"
            },
            currentDate:new Date(),
            nativePlace:{
                show:false,
                areaList:areaList,
                cancel:()=>{

                },
                confirm:()=>{

                }
            },
            folk:{
                show:false,
                columns:["汉族","蒙古族","回族","藏族"],
                 cancel:()=>{

                },
                confirm:()=>{

                }
            },
            political:{
                show:false,
                columns:["中国共产党党员","中国共产党预备党员","共青团员","中国国民党革命委员会会员"],
                cancel:()=>{

                },
                confirm:()=>{

                }
            },
            birthday:{
                show:false,
                default:new Date(),
                minDate:new Date(1900, 10, 1),
                currentDate:new Date(),
                cancel:()=>{
                    this.birthday.show = false;
                    this.birthday.default = this.birthday.currentDate;
                },
                confirm:(value)=>{
                    this.birthday.default = value;
                    this.birthday.currentDate = value;
                    this.birthday.show = false;
                }
            },
            marSta:{
                show:false,
                columns:["未婚","已婚","其它"],
                confirm:()=>{
                    console.log(this)
                }
            },
            columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
        }
    },
    components:{
        picker,
        dateTimePicker
    },
    props:['value'],
    methods: {
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
        back(){
            this.$emit("input",false);
        }
    }
}
</script>

<style lang="less">
   .basicInfo .van-field__label{
       width: 4.6rem;
   }
</style>