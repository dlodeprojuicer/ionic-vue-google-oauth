
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Welcome</ion-title>
        <ion-buttons slot="end">
          <ion-button :routerLink="{ name: 'login' }">Skip</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-slides>
        <ion-slide>
          <img src="https://init.page/img/templates/slides/slide1.png" />
          <h1>Ionic Vue | Google OAuth</h1>
          <p>Explore places!</p>
        </ion-slide>
        <ion-slide>
          <img src="https://init.page/img/templates/slides/slide2.png" />
          <h1>How to use the app</h1>
          <p>Tap the buttons and navigate around</p>
        </ion-slide>
        <ion-slide>
          <img src="https://init.page/img/templates/slides/slide4.png" />
          <h1>Get Started</h1>
          <p>Tap the button to begin.</p>
          <ion-button :routerLink="{ name: 'home' }">Get Started</ion-button>
        </ion-slide>
      </ion-slides>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonSlides,
  IonSlide,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Welcome",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonSlides,
    IonSlide,
  },
});
</script>

<style scoped>
ion-toolbar {
  --background: transparent;
  --border-color: transparent;
}

.swiper-slide {
  display: block;
}

.swiper-slide h1 {
  margin-top: 2.8rem;
}

.swiper-slide img {
  display: block;
  max-height: 50%;
  max-width: 60%;
  margin: 36px auto;
  user-drag: none;
  user-select: none;
}

.swiper-slide p {
  padding: 0 40px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--ion-color-step-600, #60646b);

  b {
    color: var(--ion-text-color, #000000);
  }
}
</style>
  