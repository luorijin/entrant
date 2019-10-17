<template>
    <div class="login-wrap">
        <div class="logo">
            <van-image
            width="5rem"
            height="5rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
        </div>
        <van-cell-group>
            <van-field
                v-model="login.phone"
                label="手机号"
                placeholder="请输入手机号"
                required
            />
            <van-field
                v-model="login.password"
                placeholder="请输入密码"
                required>
                <span slot="label">密&nbsp;&nbsp;&nbsp;&nbsp;码</span>
            </van-field>
            <van-field
                v-model="login.sms"
                placeholder="请输入验证码"
                >
                <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
        </van-cell-group>
        <van-button id="login" type="primary" size="large">登陆</van-button>
    </div>
</template>

<script>
export default {
    name:"login",
    data(){
        return {
            login:{
                phone:"",
                mail:"",
                password:""
            },
            fileList:[]
        }
    }
}
</script>

<style lang="less">
    .login-wrap{
        height: 100%;
        overflow: auto;
        padding: 0 0.8rem;
        padding-top:1rem;
        .logo{
            text-align: center;
            margin-bottom: 0.5rem;
        }
        #login{
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