<template>
    <transition name="van-slide-right">
    <div class="flex-wrap mask jopApply" v-if="value">
        <div class="main-wrap">
            <h3>请按优先顺序选择您最希望从事的工作</h3>
            <van-cell-group>
                <div class="grounp border--bottom  type1">
                    <van-cell title="第一选择" :value="fkind" is-link @click="firstC.sortShow=true"/>
                    <van-field v-show="!fother" :value="firstC.other" placeholder="请输入职位">
                        <template slot="label"><div></div></template>
                    </van-field>    
                </div>
                 <div class="grounp  type1">
                    <van-cell title="第二选择" :value="skind" is-link  @click="secondC.sortShow=true"/>
                     <van-field v-show="!sother" :value="secondC.other" placeholder="请输入职位">
                        <template slot="label"><div></div></template>
                    </van-field>     
                </div>
            </van-cell-group>
        </div>
        <div class="btn-grounp">
            <van-button type="default" @click="back">取消</van-button>
            <van-button type="primary" @click="sure">确定</van-button>
        </div>
        <van-popup
            v-model="firstC.sortShow" 
            position="bottom">
            <transition name="van-slide-up">
            <van-picker
                v-if="firstC.sortShow"
                show-toolbar
                title="第一选择"
                :columns="firstC.columns"
                @cancel="firstC.sortShow=false"
                value-key="vname"
                @change="firstC.onChange"
                @confirm="firstC.Cf"
                />
            </transition>
        </van-popup>
        <van-popup
            v-model="secondC.sortShow"
            position="bottom">
            <transition name="van-slide-up">
            <van-picker
                show-toolbar
                title="第二选择"
                :columns="secondC.columns"
                v-if="secondC.sortShow"
                @cancel="secondC.sortShow=false"
                value-key="vname"
                @change="secondC.onChange"
                @confirm="secondC.Cf"
                />
            </transition>
        </van-popup>
    </div>
    </transition>
</template>

<script>
// 应聘职位
import columns from '@/mock/jopapply.json'
import utils from '@/utils/'
export default {
    name:"jopApply",
    data(){
        return {
            firstC:{
                sortShow:false,
                columns:[{},{}],
                other:"",
                Cf:(values,index)=>{
                    this.firstC.columns[0].defaultIndex = index[0];
                    this.firstC.columns[1].defaultIndex = index[1];
                    this.firstC.columns[1].values =  values[0].subitems;
                    this.firstC.sortShow = false;
                },
                onChange:(picker, values)=> {
                    picker.setColumnValues(1, values[0].subitems);
                }
            },
            secondC:{
                sortShow:false,
                sortIndex:0,
                jopIndex:0,
                columns:[{},{}],
                other:"",
                Cf:(values,index)=>{
                    this.secondC.columns[0].defaultIndex = index[0];
                    this.secondC.columns[1].defaultIndex = index[1]
                    this.secondC.columns[1].values =  values[0].subitems;
                    this.secondC.sortShow = false;
                },
                onChange:(picker, values)=> {
                    picker.setColumnValues(1, values[0].subitems);
                }
            }
        }
    },
    props:['value','cdata'],
    created(){
       this.dataTran(columns)
       this.initC();
    },
    computed:{
        fother(){//是否显示第一选择输入框
            let obj =  this.firstC.columns[1] || {};
            return obj.values[obj.defaultIndex].number || false;
        },
        sother(){//是否显第二选择输入框
            let obj =  this.secondC.columns[1] || {};
            return obj.values[obj.defaultIndex].number || false;
        },
        fkind(){
            let obj = this.firstC.columns[1] || {};
            return obj.values[obj.defaultIndex].name || "请选择职位";
        },
        skind(){
            let obj = this.secondC.columns[1] || {};
            return obj.values[obj.defaultIndex].name || "请选择职位";
        },
    },
    methods: {
        dataTran(columns){
            columns.forEach(sort => {
                sort.vname = sort.number+sort.name;
                sort.subitems.forEach((jop)=>{
                    jop.vname = jop.number+jop.name;
                })
            });
        },
        back(){
            this.$emit("input",false);
        },
        initC(){//回选
            let first = this.cdata.first;
            let second = this.cdata.second;

            //第一选择回选
            let sortIndex = utils.getArrIndex(columns,'number',first.knum);
            let jopcol = columns[sortIndex].subitems;
            let jopIndex = utils.getArrIndex(jopcol,'number',first.sknum);
            this.firstC.columns = [
                {
                    values:columns,
                    defaultIndex:sortIndex
                },
                {
                    values:jopcol,
                    defaultIndex:jopIndex
                }
            ]

            //第二选择回选
            let sortIndex2 = utils.getArrIndex(columns,'number',second.knum);
            let jopcol2 = columns[sortIndex2].subitems;
            let jopIndex2 = utils.getArrIndex(jopcol2,'number',second.sknum);
            this.secondC.columns = [
                {
                    values:columns,
                    defaultIndex:sortIndex2
                },
                {
                    values:jopcol2,
                    defaultIndex:jopIndex2
                }
            ]
        },
        sure(){

        }
    }
}
</script>

<style lang="less">
   .jopApply input{
       border-bottom: 1px solid #F4f4f4;
   }
</style>