import { Component, h } from "@stencil/core";

@Component({
  tag: "page-audio",
})
export class PageAudio {

  render() {
    return (
      <ion-content color="secondary">
        <organism-header></organism-header>

        <ion-grid fixed>
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <ion-text class="ion-text-center">
                <h1>Listen on Spotify</h1>
              </ion-text>
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <ion-text class="ion-text-center">
                <p>Add Glass Spouses to your Spotify playlists.</p>
              </ion-text>
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col size="auto">
              <iframe
                src="https://open.spotify.com/embed/artist/56uC86XnwYTW7JFf6E18Qd"
                width="660"
                height="400"
                frameborder="0"
                allowtransparency="true"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
            </ion-col>
          </ion-row>
        </ion-grid>

        <organism-footer></organism-footer>
      </ion-content>
    );
  }

}
