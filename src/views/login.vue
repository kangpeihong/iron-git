<template>
  <div class="login">
    <div class="login_box">
      <div class="login_container">
        <div class="title">Hello</div>
        <div class="login_in">
          <el-form :model="userInfo" ref="userInfo">
            <el-form-item
              prop="username"
              :rules="[
                { required: true, message: '请输入用户名', trigger: 'blur' }
              ]"
            >
              <el-input
                v-model="userInfo.username"
                placeholder="请输入账号"
                class="el_input"
              ></el-input>
            </el-form-item>
            <el-form-item
              prop="password"
              :rules="[
                { required: true, message: '请输入密码', trigger: 'blur' }
              ]"
            >
              <el-input
                v-model="userInfo.password"
                placeholder="请输入密码"
                class="el_input"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" class="login_btn" @click="loginIn"
            >登录</el-button
          >
        </div>
      </div>
    </div>
    <div class="svg_box">
      <svg
        class="waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <!-- 形状容器 -->
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <!-- 组合形状 -->
        <g class="parallax">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use
            xlink:href="#iconfont-baobei"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />

          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import user from "@/api/user";
import url from "@/api/url";
import { initDynamicRoutes } from "@/router";

export default {
  name: "login",
  data() {
    return {
      userInfo: {
        username: "",
        password: ""
      }
    };
  },
  created() {},
  computed: {},
  methods: {
    loginIn() {
      this.$refs.userInfo.validate(vaild => {
        if (vaild) {
          user.post(url.loginIn, this.userInfo).then(res => {
            console.log("res", res);

            sessionStorage.setItem("token", res.data.token);
            user.post(url.getMenuList, res.data.role).then(ret => {
              console.log("ret", ret);
              this.$store.commit("setRightUrl", ret.data);
              console.log("444ssss4", this.$store.state.rightUrl);
              initDynamicRoutes();
              location.reload();
            });
            console.log("vuex", this.$store.state);

            console.log("vuex", this.$store.state.rightUrl);
            // initDynamicRoutes();

            this.$router.push("/");
          });
        }
        console.log("vaild", vaild);
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.login {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(60deg, #543ab7 0%, #00acc1 100%);

  .login_box {
    height: 65vh;
    overflow: hidden;

    .login_container {
      width: 300px;
      margin: 200px auto;

      .title {
        font-size: 50px;
      }

      .login_in {
        margin-top: 60px;

        .el_input {
          width: 300px;

          &:nth-child(2) {
            margin-top: 20px;
          }
        }

        .login_btn {
          width: 300px;
        }
      }
    }
  }

  .svg_box {
    height: 15vh;
  }

  .footer {
    height: 25vh;
    background: #fff;
  }
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  /* 最小值 */
  min-height: 100px;
  /* 最大值 */
  max-height: 150px;

  .parallax>use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }

  /* 选择的一个use */
  .parallax>use:nth-child(1) {
    /* 延迟 2s 执行 */
    animation-delay: -2s;
    /* 7s 内 执行完毕 */
    animation-duration: 7s;
  }

  .parallax>use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  .parallax>use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  .parallax>use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
