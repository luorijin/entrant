<template>
<div>
    <div class="flex-wrap">
        <div class="main-wrap">
            <van-cell-group>
                <van-cell title="我是" mvf="radio">
                    <van-radio-group slot="right-icon" v-model="radio">
                        <van-radio name="1">历届生</van-radio>
                        <van-radio name="2">应届毕业生</van-radio>
                    </van-radio-group>
                </van-cell>
                <van-cell title="近期免冠照">
                    <van-uploader class="head" :after-read="onRead" accept="image/*">
                            <van-image v-if="head"
                                width="2.5rem"
                                height="2.5rem"
                                :src="head" />
                        </van-uploader>
                </van-cell>
                <div class="grounp border--bottom  type1" mvf="resume.jopApply">
                        <van-cell title="应聘职位" is-link  @click="jopApply.show=true"/>
                        <div class="summary"><span>{{resume.jopApply.first.subkind}}</span><span>{{resume.jopApply.second.subkind}}</span></div>
                </div>
                <div class="grounp  border--bottom type1">
                        <van-cell title="应聘渠道" is-link  @click="applyPlace.show=true"/>
                        <div class="summary"><span>人才中心</span></div>
                </div>
                <div class="grounp border--bottom type1">
                        <van-cell title="基本信息" is-link  @click="basicInfo.show=true"/>
                        <div class="summary"><span>张三</span><span>男</span><span>25岁</span></div>
                </div>
                <div class="grounp border--bottom type1">
                        <van-cell title="职称信息">
                            <van-icon name="plus" slot="right-icon" size="1rem" @click="jopTitleInfo.show=true"/>
                        </van-cell>
                        <van-cell class="no-pad" is-link @click="jopTitleInfo.show=true">
                            <template slot="title">
                                <div class="summary"><span>教授</span><span>正高级</span></div>
                            </template>
                        </van-cell>
                        <div class="certific">
                            <div class="title">职称证明</div>
                            <van-uploader class="mupload" v-model="fileList" :after-read="afterRead" />
                        </div> 
                    
                </div>
                <div class="grounp border--bottom type1">
                        <van-cell title="职（执）业资格">
                            <van-icon name="plus" slot="right-icon" size="1rem" @click="professionalQual.show=true"/>
                        </van-cell>
                        <van-cell class="no-pad" is-link @click="professionalQual.show=true">
                            <template slot="title">
                                <div class="summary"><span>材料与科学</span><span>职业资格一级（高级技师）</span></div>
                            </template>
                        </van-cell>
                        <div class="certific">
                            <div class="title">执业资格证明</div>
                            <van-uploader class="mupload" v-model="fileList" :after-read="afterRead" />
                        </div> 
                </div>
                <div class="grounp border--bottom type1">
                        <van-cell title="教育经历">
                            <van-icon name="plus" slot="right-icon" size="1rem" @click="eduExperience.show=true"/>
                        </van-cell>
                        <van-cell class="no-pad" is-link @click="eduExperience.show=true">
                            <template slot="title">
                                <div class="summary">
                                    <div>北京大学<span class="time">2012.09-2016.07</span></div>
                                    <span>本科</span><span>电子工程</span>
                                </div>
                            </template>
                        </van-cell>
                        <van-cell class="no-pad" is-link>
                            <template slot="title">
                                <div class="summary">
                                    <div>清华大学<span class="time">2012.09-2016.07</span></div>
                                    <span>本科</span><span>自动化</span>
                                </div>
                            </template>
                        </van-cell>
                        <div class="certific">
                            <div class="title">学历证明</div>
                            <van-uploader class="mupload" v-model="fileList" :after-read="afterRead" />
                        </div> 
                    
                </div>
                <div class="grounp border--bottom type1">
                        <van-cell title="外语水平">
                            <van-icon name="plus" slot="right-icon" size="1rem" @click="forelangLevel.show=true"/>
                        </van-cell>
                        <van-cell class="no-pad" is-link @click="forelangLevel.show=true">
                            <template slot="title">
                                <div class="summary"><span>英文</span><span>四级</span></div>
                            </template>
                        </van-cell>
                        <div class="certific">
                            <div class="title">外语水平证书</div>
                            <van-uploader class="mupload" v-model="fileList" :after-read="afterRead" />
                        </div> 
                </div>
                <div class="grounp border--bottom type1">
                        <van-cell title="计算机水平">
                            <van-icon name="plus" slot="right-icon" size="1rem"/>
                        </van-cell>
                        <div class="certific">
                            <div class="title">计算机水平证书</div>
                            <van-uploader class="mupload" v-model="fileList" :after-read="afterRead" />
                        </div> 
                </div>
                <div class="grounp border--bottom type1">
                        <van-cell title="全职工作简历">
                            <van-icon name="plus" slot="right-icon" size="1rem" @click="fullTimeJopExpe.show=true"/>
                        </van-cell>
                        <van-cell class="no-pad" is-link @click="fullTimeJopExpe.show=true">
                            <template slot="title">
                                <div class="summary">
                                    <div>中国移动 <span class="time">2012.09-2016.07</span></div>
                                    <span>测试工程师</span>
                                </div>
                            </template>
                        </van-cell>
                </div>
                <div class="grounp border--bottom type1">
                        <van-cell title="社团组织与接任职务">
                            <van-icon name="plus" slot="right-icon" size="1rem" @click="clubActivityInfo.show=true"/>
                        </van-cell>
                        <van-cell class="no-pad" is-link @click="clubActivityInfo.show=true">
                            <template slot="title">
                                <div class="summary">
                                    <div>学生会 <span class="time">2012.09-2016.07</span></div>
                                </div>
                            </template>
                        </van-cell>
                </div>
                <div class="grounp border--bottom type1">
                        <van-cell title="社会实践实习或兼职">
                            <van-icon name="plus" slot="right-icon" size="1rem" @click="socialActi.show=true"/>
                        </van-cell>
                        <van-cell class="no-pad" is-link @click="socialActi.show=true">
                            <template slot="title">
                                <div class="summary">
                                    <div>肯德基兼职 <span class="time">2012.09-2016.07</span></div>
                                </div>
                            </template>
                        </van-cell>
                </div>
                <div class="grounp border--bottom type1">
                        <van-cell title="获奖情况">
                            <van-icon name="plus" slot="right-icon" size="1rem" @click="awards.show=true"/>
                        </van-cell>
                        <van-cell class="no-pad" is-link>
                            <template slot="title">
                                <div class="summary">
                                    <div>中国青年奖 <span class="time">2012.09-2016.07</span></div>
                                </div>
                            </template>
                        </van-cell>
                        <div class="certific">
                            <div class="title">获奖证书</div>
                            <van-uploader class="mupload" v-model="fileList" :after-read="afterRead" />
                        </div> 
                </div>
                <div class="grounp border--bottom type1">
                        <van-cell title="家庭情况">
                            <van-icon name="plus" slot="right-icon" size="1rem" @click="familyInfo.show=true"/>
                        </van-cell>
                        <van-cell class="no-pad" is-link @click="familyInfo.show=true">
                            <template slot="title">
                                <div class="summary"><span>张星空</span><span>父子</span></div>
                            </template>
                        </van-cell>
                </div>
                <div class="grounp border--bottom type1">
                        <van-cell title="薪酬期望及职业规划" is-link @click="salaryAndPlan.show=true"/>
                        <div class="summary"><span>约15万元</span></div>
                </div>
                    <div class="grounp type2">
                        <van-checkbox v-model="checked">
                            本人严谨声明，我与其它公司不存在任何劳动合同关系，且上述所填一切属实。如有虚假，愿接受公司无条件解除劳动关系处理和“职业行为不健康”评价，并个人承担因此导致的一切后果或责任。
                        </van-checkbox>
                </div>
            </van-cell-group>
        </div>
        <div class="grounp van-hairline--top type3">
            <van-button id="submit" type="primary" size="large">提交</van-button>
        </div>
    </div>
    <!-- v-if 重新初始化 v-modelv-model是为了做动画 -->
    <jopapply v-if="jopApply.show" v-model="jopApply.show" :cdata="resume.jopApply"></jopapply>
    <basicInfo v-if="basicInfo.show" v-model="basicInfo.show"></basicInfo>
    <jopTitleInfo v-model="jopTitleInfo.show"></jopTitleInfo>
    <professionalQual v-model="professionalQual.show"></professionalQual>
    <eduExperience v-model="eduExperience.show"></eduExperience>
    <forelangLevel v-model="forelangLevel.show"></forelangLevel>
    <familyInfo v-model="familyInfo.show"></familyInfo>
    <fullTimeJopExpe v-model="fullTimeJopExpe.show"></fullTimeJopExpe>
    <clubActivityInfo v-model="clubActivityInfo.show"></clubActivityInfo>
    <socialActi v-model="socialActi.show"></socialActi>
    <awards v-model="awards.show"></awards>
    <salaryAndPlan v-model="salaryAndPlan.show"></salaryAndPlan>
    <preServiceCompRela v-model="preServiceCompRela.show"></preServiceCompRela>
    <van-popup
            v-model="applyPlace.show"
            position="bottom">
            <van-picker
                show-toolbar
                title="应聘渠道"
                :columns="applyPlace.columns"
                @cancel="applyPlace.show=false"
                @confirm="applyPlace.cf"
                />
    </van-popup>
</div>
</template>

<script>
import utils from '@/utils/'
import jopapply from '@/components/jopApply.vue' //应聘职位
import basicInfo from '@/components/basicInfo.vue' //基本信息
import jopTitleInfo from '@/components/jopTitleInfo.vue' //职称信息
import professionalQual from '@/components/professionalQual.vue' //职（执）业资格
import eduExperience from '@/components/eduExperience.vue' //教育简历
import forelangLevel from '@/components/forelangLevel.vue' //外语水平
import familyInfo from '@/components/familyInfo.vue' //家庭情况
import fullTimeJopExpe from '@/components/fullTimeJopExpe.vue' //全职工作简历
import clubActivityInfo from '@/components/clubActivityInfo.vue' //社团组织与担任职务
import socialActi from '@/components/socialActi.vue' //社会实践实习或兼职
import awards from '@/components/awards.vue' //获奖情况
import salaryAndPlan from '@/components/salaryAndPlan.vue' //选择工作的关键因素
import preServiceCompRela from '@/components/preServiceCompRela.vue' //最近两家服务机构
export default {
    name:"mainc",
    data(){
        return　{
            resume:{
                isGra:"1",
                jopApply:{
                    first:{"kind":"销售类","knum":"B、","subkind":"销售工程师","sknum":"①"},
                    second:{"kind":"销售类","knum":"B、","subkind":"客户工程师","sknum":"②"}
                }
            },
            radio:"1",
            head:"",
            jopApply:{
                show:false
            },
            basicInfo:{
                show:false
            },
            jopTitleInfo:{
                show:false
            },
            professionalQual:{
                show:false
            },
            eduExperience:{
                show:false
            },
            forelangLevel:{
                show:false
            },
            familyInfo:{
                show:false
            },
            fullTimeJopExpe:{
                show:false
            },
            clubActivityInfo:{
                show:false
            },
            socialActi:{
                show:false
            },
            awards:{
                show:false
            },
            salaryAndPlan:{
                show:false
            },
            preServiceCompRela:{
                show:false
            },
            applyPlace:{
                show:false,
                columns: ['招聘会', '网络招聘（智联)', '网络招聘（51job)', '网络招聘（猎聘)'],
                cf:()=>{

                }
            },
            fileList:[],
            bb:{
                c:"我是是"
            },
            checked:false
        }
    },
    components:{
       jopapply,
       basicInfo,
       jopTitleInfo,
       professionalQual,
       eduExperience,
       forelangLevel,
       familyInfo,
       fullTimeJopExpe,
       clubActivityInfo,
       socialActi,
       awards,
       salaryAndPlan,
       preServiceCompRela
    },
    created(){
        
    },
    mounted(){
       let mvfs = document.querySelectorAll("[mvf]");
        [].forEach.call(mvfs,(mvf)=>{
            console.log(mvf.getAttribute("mvf"))
        })
        utils.setBodyHei();
        console.log(this.getVal("bb.c"));
    },
    methods: {
        getVal(path){
            let fn = new Function("data",`return data.${path}`);
            console.log(this.$data)
            return fn(this.$data);
        },
        onRead(file) {
            console.log(file);
            //将原图片显示为选择的图片
            this.head = file.content;
		},
        afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
        }
    }
}
</script>

<style lang="less">
    .flex-wrap{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .flex-wrap.mask{
        width: 100%;
        position: absolute;
        top:0;
        left: 0;
        z-index: 22;
        background: #fff;
    }
    .btn-grounp{
        display: flex;
        justify-content: center;
        padding: 0.5rem;
        .van-button{
            flex: 1;
            +.van-button{
                margin-left: 0.5rem;
            }
        }
    }
    .main-wrap{
        flex: 1;
        padding: 0.6rem;
        padding-bottom: 1.2rem;
        height: 100%;
        overflow: auto;
        color: #666;
        .van-radio-group{
            display: flex;
            .van-radio+.van-radio{
                margin-left: 0.8rem;
            }
        }
       .border--bottom{
           position: relative;
           &::after{
            position: absolute;
            width: 100%;
            content: ' ';
            bottom: 0;
            left: 0;
            border-bottom: 1px solid #f4f4f4;
        }
       }
        .head .van-uploader__upload{
            width: 2.5rem;
            height: 2.5rem;
        }
        .van-cell__title{
            font-weight: bold;
        }
        .grounp{
            padding-bottom: 0.5rem;
            .van-cell::after{
                border:none;
            }
            .van-icon-plus:active{
                opacity: 0.6;
            }
            .certific{
                .title{
                    color: #666;
                    font-weight: bold;
                }
                .mupload{
                    margin-top:0.5rem;
                }
                .van-uploader__upload,.van-uploader__preview-image{
                    width: 3rem;
                    height: 3rem;
                }
            }
        }
        .type1 .summary {
           padding-bottom: 0.5rem;
           .time{
               float: right;
               color: #999;
           }
            span{
                display: inline-block;
                +span{
                    margin-left: 0.35rem;
                }
            }
        }
        .van-cell{
            padding: 0.7rem 0;
            &.no-pad{
                padding: 0;
                .van-cell__title{
                    font-weight: normal;
                }
            }
        }
        .van-cell-group::after{
            border: none;
        }
        .van-cell:not(:last-child)::after{
            left: 0;
            transform: scaleY(1);
            border-color: #f4f4f4;
        }
        .type2{
            margin-top: 0.8rem;
            font-size: 0.6rem;
            .van-checkbox{
                align-items:flex-start;
            }
        }
    }
    .type3{
        padding: 0.6rem;
    }
</style>