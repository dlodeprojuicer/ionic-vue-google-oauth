<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar :translucent="true" slot="bottom">
        <ion-tab-button tab="explorer" :selected="true" href="/explorer">
          <ion-icon :icon="compassOutline" />
          <ion-label>Explorer</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/user/profile">
          <ion-icon :icon="personOutline" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script >
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import {
  walletOutline,
  scanCircleOutline,
  personOutline,
  mailOutline,
  compassOutline,
  linkOutline,
} from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      mailOutline,
      walletOutline,
      scanCircleOutline,
      personOutline,
      compassOutline,
      linkOutline,
    };
  },
};
</script>