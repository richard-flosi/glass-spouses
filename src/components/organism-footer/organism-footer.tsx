import { Component, h } from "@stencil/core";

@Component({
  tag: "organism-footer",
})
export class OrganismFooter {
  render() {
    return (
      <ion-grid fixed class="ion-padding">
        <ion-row class="ion-wrap ion-padding-bottom ion-align-items-center ion-justify-content-center">
          <ion-col size="auto" class="ion-padding ion-text-center">
            <a target="_blank" href="https://geo.music.apple.com/us/artist/glass-spouses/1424470946?mt=1&app=music&ls=1">
              <img
                src="/assets/link-logo-apple.svg"
                alt="Apple Music"
                height="30"
              />
            </a>
          </ion-col>
          <ion-col size="auto" class="ion-padding ion-text-center">
            <a target="_blank" href="https://play.google.com/store/music/artist/Glass_Spouses?id=Aksrym3tcw2bqnrw5hiqsfjmxpa&hl=en">
              <img
                src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                alt="Get it on Google Play"
                height="60"
              />
            </a>
          </ion-col>
          <ion-col size="auto" class="ion-padding ion-text-center">
            <a target="_blank" href="https://www.amazon.com/s/ref=ntt_srch_drd_B07G9RJPWJ?ie=UTF8&field-keywords=Glass%20Spouses&index=digital-music&search-type=ss">
                <img
                  src="/assets/link-logo-amazon.png"
                  height="60"
                />
            </a>
          </ion-col>
          <ion-col size="auto" class="ion-padding ion-text-center">
            <a target="_blank" href="https://open.spotify.com/artist/56uC86XnwYTW7JFf6E18Qd">
              <img
                src="/assets/link-logo-spotify.png"
                alt="Spotify"
                height="50"
              />
            </a>
          </ion-col>
          <ion-col size="auto" class="ion-padding ion-text-center">
            <a target="_blank" href="https://www.youtube.com/channel/UCjFjyE4tWrdUrozXv5Jw5Tg">
              <img
                src="/assets/link-logo-youtube.svg"
                alt="YouTube"
                height="30"
              />
            </a>
          </ion-col>
        </ion-row>

        <ion-row class="ion-padding-bottom ion-align-items-center ion-justify-content-center">
          <ion-col class="ion-padding ion-text-center">
            <ion-text>
              &copy; 2022 Glass Spouses. All Rights Reserved.
            </ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
    );
  }
}