import { Component, h } from "@stencil/core";

@Component({
  tag: "organism-footer",
})
export class OrganismFooter {
  async onShare() {
    if (navigator.share) {
      await navigator.share({
        title: document.title,
        url: window.location.href,
      });
    }
  }

  render() {
    return (
      <ion-grid fixed class="ion-padding">
        <ion-row class="ion-wrap ion-padding-bottom ion-align-items-center ion-justify-content-center">
          <ion-col size="auto" class="ion-padding ion-text-center">
            <a target="_blank" href="https://geo.music.apple.com/us/artist/glass-spouses/1424470946?mt=1&app=music&ls=1">
              <img src="/assets/link-logo-apple.svg" alt="Apple Music" height="30" />
            </a>
          </ion-col>
          <ion-col size="auto" class="ion-padding ion-text-center">
            <a target="_blank" href="https://www.amazon.com/music/player/artists/B07G9RJPWJ/glass-spouses">
              <img src="/assets/link-logo-amazon.png" height="60" />
            </a>
          </ion-col>
          <ion-col size="auto" class="ion-padding ion-text-center">
            <a target="_blank" href="https://open.spotify.com/artist/56uC86XnwYTW7JFf6E18Qd">
              <img src="/assets/link-logo-spotify.png" alt="Spotify" height="50" />
            </a>
          </ion-col>
          <ion-col size="auto" class="ion-padding ion-text-center">
            <a target="_blank" href="https://music.youtube.com/channel/UCfXETswfimTSOnwlaLu_EAA">
              <img src="/assets/link-logo-youtube.svg" alt="YouTube" height="30" />
            </a>
          </ion-col>
        </ion-row>

        <ion-row class={`ion-align-items-center ion-justify-content-center ${!navigator.share && "ion-hide"}`}>
          <ion-col size="auto">
            <ion-button fill="outline" color="light" size="large" onclick={this.onShare}>
              Share this page <ion-icon slot="end" icon="share"></ion-icon>
            </ion-button>
          </ion-col>
        </ion-row>

        <ion-row class="ion-padding-bottom ion-align-items-center ion-justify-content-center">
          <ion-col class="ion-padding ion-text-center">
            <ion-text>&copy; 2023 Glass Spouses. All Rights Reserved.</ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
    );
  }
}
