import { Component, h } from "@stencil/core";

@Component({
  tag: "page-home",
})
export class PageHome {
  render() {
    return (
      <ion-content color="secondary">
        <organism-header></organism-header>

        <ion-grid fixed>
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <ion-text class="ion-text-center">
                <h1>Welcome to Glass Spouses</h1>
              </ion-text>
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <ion-text class="ion-text-center">
                <p>Glass Spouses is a gothic folk rock band formed by Laura Cooper and Richard Flosi.</p>
              </ion-text>
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <ion-card color="primary">
                <ion-card-content>
                  <ion-grid>
                    <ion-row class="ion-align-items-center ion-justify-content-center">
                      <ion-col>
                        <ion-text class="ion-text-center">
                          <p>Watch Glass Spouses Music Videos</p>
                        </ion-text>
                      </ion-col>
                    </ion-row>
                    <ion-row class="ion-align-items-center ion-justify-content-center">
                      <ion-col size="auto">
                        <ion-button color="light" href="/video">
                          Watch
                          <ion-icon slot="end" name="videocam-outline"></ion-icon>
                        </ion-button>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-card-content>
              </ion-card>
            </ion-col>

            <ion-col>
              <ion-card color="primary">
                <ion-card-content>
                  <ion-grid>
                    <ion-row class="ion-align-items-center ion-justify-content-center">
                      <ion-col>
                        <ion-text class="ion-text-center">
                          <p>Listen to Glass Spouses Music</p>
                        </ion-text>
                      </ion-col>
                    </ion-row>
                    <ion-row class="ion-align-items-center ion-justify-content-center">
                      <ion-col size="auto">
                        <ion-button color="light" href="/audio">
                          Listen
                          <ion-icon slot="end" name="musical-notes-outline"></ion-icon>
                        </ion-button>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-img alt="Glass Spouses" src="/assets/joan.jpeg"></ion-img>
            </ion-col>
          </ion-row>
        </ion-grid>

        <organism-footer></organism-footer>
      </ion-content>
    );
  }
}



