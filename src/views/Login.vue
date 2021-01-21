
<template>
  <ion-page>
    <ion-content class="ion-padding">
      <img
        class="logo"
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0iTGF5ZXJfMSI+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjNEE4QUY5IiBkPSJNMjU2LDEzOS4zYy02NC4zLDAtMTE2LjcsNTIuMy0xMTYuNywxMTYuN2MwLDY0LjMsNTIuMywxMTYuNywxMTYuNywxMTYuN1MzNzIuNywzMjAuMywzNzIuNywyNTYKCQkJQzM3Mi43LDE5MS43LDMyMC4zLDEzOS4zLDI1NiwxMzkuM3oiLz4KCQk8Zz4KCQkJPGNpcmNsZSBmaWxsPSIjNEE4QUY5IiBjeD0iNDIzLjUiIGN5PSI5Ni41IiByPSI1My4yIi8+CgkJPC9nPgoJCTxwYXRoIGZpbGw9IiM0QThBRjkiIGQ9Ik00ODksMTQ5LjlsLTIuMi00LjlsLTMuNiw0Yy04LjcsOS45LTE5LjgsMTcuNS0zMi4xLDIyLjFsLTMuNCwxLjNsMS40LDMuM2MxMC42LDI1LjUsMTYsNTIuNSwxNiw4MC4yCgkJCWMwLDExNS4zLTkzLjgsMjA5LjItMjA5LjIsMjA5LjJTNDYuOCwzNzEuMyw0Ni44LDI1NlMxNDAuNyw0Ni44LDI1Niw0Ni44YzMxLjMsMCw2MS41LDYuOCw4OS42LDIwLjJsMy4zLDEuNmwxLjQtMy4zCgkJCWM1LjEtMTIsMTMuMy0yMi43LDIzLjYtMzFsNC4yLTMuNGwtNC44LTIuNUMzMzYuOCw5LjYsMjk3LjMsMCwyNTYsMEMxMTQuOCwwLDAsMTE0LjgsMCwyNTZjMCwxNDEuMiwxMTQuOCwyNTYsMjU2LDI1NgoJCQlzMjU2LTExNC44LDI1Ni0yNTZDNTEyLDIxOS4xLDUwNC4zLDE4My40LDQ4OSwxNDkuOXoiLz4KCTwvZz4KPC9nPgo8ZyBpZD0iTGF5ZXJfMiI+CjwvZz4KPGcgaWQ9IkxheWVyXzMiPgo8L2c+Cjwvc3ZnPgo="
      />
      <form>
        <ion-list>
          <ion-item>
            <ion-label>Email</ion-label>
            <ion-input type="email" v-model="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Password</ion-label>
            <ion-input type="password" v-model="password"></ion-input>
          </ion-item>
        </ion-list>
      </form>

        <ion-button expand="block" :routerLink="{ name: 'profile' }" >Log in</ion-button>
        <ion-button color="light" expand="block">
          Create an account
        </ion-button>


        <div class="oauth-btns">
          or signin with
        <ion-button expand="block" @click="googleAuth"><ion-icon slot="start" :icon="logoGoogle" />Google</ion-button>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon
} from "@ionic/vue";
import { logoGoogle } from "ionicons/icons";

export default {
  name: "Login",
  components: {
    IonPage,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon
  },
  data() {
    return {
      email: null,
      password: null,
      googleUserProfile: undefined
    };
  },
  setup() {
    return {
      logoGoogle
    }
  },
  methods: {
    login() {
      console.log(this.user);
    },
    googleAuth() {
      let gapi = window.gapi;
      let clientId ="1053316364678-dgo3eoiidhokv7uc7cf4on4fm5tscoss.apps.googleusercontent.com";
      let apiKey ="AIzaSyD7AFifl037yp_4hg0zvgbhZzr_TwFSgEE";
      let discoveryDocs =["https://www.googleapis.com/discovery/v1/apis/oauth2/v2/rest"];
      let scope ="https://www.googleapis.com/auth/userinfo.profile";

      gapi.load("client:auth2", () => {
        gapi.client.init({
          apiKey,
          clientId,
          discoveryDocs,
          scope,
        }).then(() => {
          if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
            this.googleUserProfile = gapi.auth2.getAuthInstance().currentUser.get();
            this.loginApiCall(this.googleUserProfile);
            console.log("logged in...");
          } else {
            gapi.auth2.getAuthInstance().signIn().then(() => {
            this.googleUserProfile = gapi.auth2.getAuthInstance().currentUser.get();
            this.loginApiCall(this.googleUserProfile);
            console.log("NOT logged in...");
            }).catch(err => {
              alert(`Google auth error: ${err}`);
            });
          }
        })
        .catch((err) => {
          alert(err);
        })
      });
    },
    loginApiCall(data) {
      // API call to handle googleUserProfile data
      // then redirect to home/profile page
      console.log("googleUserProfile", data);
      this.$router.push("/profile");
    }
  },
};
</script>

<style scoped>
.logo {
  display: block;
  margin: 24px auto;
  max-height: 96px;
}

ion-button {
  margin: 10px;
}

.oauth-btns {
  margin: 40px;
  text-align: center;
}
</style>
  