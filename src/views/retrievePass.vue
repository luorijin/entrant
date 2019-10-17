<template>
    <div class="retrievePass-wrap">
        <van-cell-group>
            <van-field
                v-model="retrievePass.mail"
                label="注册邮箱"
                placeholder="请输入邮箱"
                required>
            </van-field>
            <van-field
                v-model="retrievePass.sms"
                placeholder="请输入验证码"
                >
                <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
            <van-field
                v-model="retrievePass.password"
                 label="重置密码"
                placeholder="请输入密码"
                required>
            </van-field>
        </van-cell-group>
        <van-button id="submit" type="primary" size="large">提交</van-button>
    </div>
</template>

<script>
export default {
    name:"retrievePass",
    data(){
        return {
            retrievePass:{
                phone:"",
                mail:"",
                password:""
            }
        }
    }
}
</script>

<style lang="less">
    .retrievePass-wrap{
        height: 100%;
        overflow: auto;
        padding: 0 0.8rem;
        padding-top:2.2rem;
        #submit{
            margin-top: 1rem;
        }
        .van-cell-group::after{
            border-top: none;
        }
        .van-cell:not(:last-child)::after{
            left: 0;
            margin-bottom: 0.1rem;
        }

    }
</style>