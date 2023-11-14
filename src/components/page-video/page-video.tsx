import { Component, h } from "@stencil/core";

@Component({
  tag: "page-video",
})
export class PageVideo {
  render() {
    return (
      <ion-content color="secondary">
        <organism-header></organism-header>

        <ion-grid fixed>
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <ion-text class="ion-text-center">
                <h1>Watch Music Videos</h1>
              </ion-text>
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <ion-text class="ion-text-center">
                <p>Watch Glass Spouses Music Videos</p>
              </ion-text>
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col size="auto">
              <span class="ion-hide-lg-up">
                <iframe
                  width="355px"
                  height="200px"
                  src="https://www.youtube.com/embed/videoseries?list=PL_EpEfhIoYie3BJrH8lkWjOj7o8NI2q3c"
                  title="YouTube video player: Music Videos by Glass Spouses"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    display: "block",
                    margin: "auto",
                    border: "none",
                    borderRadius: "4px",
                    boxShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                  }}
                ></iframe>
              </span>
              <span class="ion-hide-lg-down">
                <iframe
                  width="560px"
                  height="315px"
                  src="https://www.youtube.com/embed/videoseries?list=PL_EpEfhIoYie3BJrH8lkWjOj7o8NI2q3c"
                  title="YouTube video player: Music Videos by Glass Spouses"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    display: "block",
                    margin: "auto",
                    border: "none",
                    borderRadius: "4px",
                    boxShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                  }}
                ></iframe>
              </span>
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col size="auto">
              <script src="https://apis.google.com/js/platform.js"></script>
              <div class="g-ytsubscribe" data-channelid="UCjFjyE4tWrdUrozXv5Jw5Tg" data-layout="default" data-count="hidden"></div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <organism-footer></organism-footer>
      </ion-content>
    );
  }
}
