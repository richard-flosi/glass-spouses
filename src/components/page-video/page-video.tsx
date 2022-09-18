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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL_EpEfhIoYie3BJrH8lkWjOj7o8NI2q3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
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
