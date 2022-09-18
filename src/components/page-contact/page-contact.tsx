import { Component, h } from "@stencil/core";

@Component({
  tag: "page-contact",
})
export class PageContact {
  render() {
    return (
      <ion-content color="secondary">
        <organism-header></organism-header>

        <ion-grid fixed>
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <ion-text class="ion-text-center">
                <h1>Contact Us</h1>
              </ion-text>
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <ion-text class="ion-text-center">
                <p>Hi! We're glad you found us. Please stay connected. Thanks!</p>
                <p>Email Glass Spouses at:</p>
                <a href="mailto:glass.spouses@gmail.com">
                  <ion-text color="light" class="ion-text-center">
                    <h1>glass.spouses@gmail.com</h1>
                  </ion-text>
                </a>
              </ion-text>
            </ion-col>
          </ion-row>
        </ion-grid>

        <organism-footer></organism-footer>
      </ion-content>
    );
  }

}
