<template>
    <div class="register-wrap">
        <van-cell-group>
            <van-field
                v-model="register.phone"
                label="手机号"
                placeholder="请输入手机号"
                required
            />
            <van-field
                v-model="register.mail"
                placeholder="请输入邮箱"
                required>
                <span slot="label">邮&nbsp;&nbsp;&nbsp;&nbsp;箱</span>
            </van-field>
            <van-field
                v-model="register.password"
                placeholder="请输入密码"
                required>
                <span slot="label">密&nbsp;&nbsp;&nbsp;&nbsp;码</span>
            </van-field>
            <van-field
                v-model="register.sms"
                placeholder="请输入验证码"
                >
                <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
        </van-cell-group>
        <van-button id="submit" type="primary" size="large">提交</van-button>
    </div>
</template>

<script>
export default {
    name:"register",
    data(){
        return {
            register:{
                phone:"",
                mail:"",
                password:""
            }
        }
    }
}
</script>

<style lang="less">
    .register-wrap{
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