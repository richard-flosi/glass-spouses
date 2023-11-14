import { Component, h } from "@stencil/core";

@Component({
  tag: "page-home",
})
export class PageHome {
  render() {
    return (
      <ion-content color="secondary">
        <organism-video-background></organism-video-background>
        <organism-header></organism-header>

        <ion-grid fixed className="ion-padding">
          <ion-row className="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <h1 class="ion-text-center">Listen to the latest from Glass Spouses</h1>
            </ion-col>
          </ion-row>
          <ion-row className="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <h6 class="ion-text-center">Glass Spouses is a gothic folk rock band formed by Laura Cooper and Richard Flosi.</h6>
              <br />
              <br />
            </ion-col>
          </ion-row>
          <ion-row className="ion-align-items-center ion-justify-content-evenly">
            <ion-col size="auto">
              <ion-button href="/songs">Songs</ion-button>
            </ion-col>
            <ion-col size="auto">
              <ion-button href="/video">Music Videos</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>

        <organism-footer></organism-footer>
      </ion-content>
    );
  }
}
