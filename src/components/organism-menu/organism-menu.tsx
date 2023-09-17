import { Component, h } from "@stencil/core";
import { menuController } from "@ionic/core";

const dismissMenu = () => {
  if (menuController.isOpen()) {
    menuController.close();
  }
};

@Component({
  tag: "organism-menu",
})
export class OrganismMenu {
  render() {
    return (
      <ion-menu side="end" contentId="ion-nav" type="overlay">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="end">
              <ion-button onClick={dismissMenu}>
                <ion-icon color="light" size="large" name="close-outline"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content color="primary">
          <ion-list color="primary" class="ion-no-padding">
            <ion-item color="primary" href="/">
              Home
            </ion-item>
            <ion-item color="primary" href="/songs">
              Songs
            </ion-item>
            <ion-item color="primary" href="/video">
              Music Videos
            </ion-item>
            <ion-item
              color="primary"
              href="https://www.redbubble.com/people/richard-flosi/shop?artistUserName=richard-flosi&asc=u&collections=1595615&iaCode=all-departments&sortOrder=relevant"
              target="_blank"
            >
              Merch
            </ion-item>
            <ion-item color="primary" href="https://soundcloud.com/glass-spouses/tracks" target="_blank">
              SoundCloud
            </ion-item>
            <ion-item color="primary" href="https://www.facebook.com/GlassSpouses" target="_blank">
              Facebook
            </ion-item>
            <ion-item color="primary" href="https://twitter.com/glassspouses" target="_blank">
              Twitter
            </ion-item>
            <ion-item color="primary" href="/contact">
              Contact
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>
    );
  }
}
