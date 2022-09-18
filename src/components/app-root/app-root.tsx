import { Component, h } from "@stencil/core";
import { menuController } from "@ionic/core";

const dismissMenu = () => {
  if (menuController.isOpen()) {
    menuController.close();
  }
};

@Component({
  tag: "app-root",
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <organism-menu></organism-menu>

        <ion-router root="/" useHash={false} onIonRouteWillChange={dismissMenu}>
          <ion-route url="/" component="page-home" />
          <ion-route url="/audio" component="page-audio" />
          <ion-route url="/video" component="page-video" />
          <ion-route url="/contact" component="page-contact" />
        </ion-router>

        <ion-nav id="ion-nav" />
      </ion-app>
    );
  }
}
