import { Component, h } from "@stencil/core";

@Component({
  tag: "page-contact-success",
})
export class PageContactSuccess {
  render() {
    return (
      <ion-content color="secondary">
        <organism-header></organism-header>

        <ion-grid fixed>
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <ion-text class="ion-text-center">
                <h1>Thank You for Contacting Glass Spouses!</h1>
              </ion-text>
            </ion-col>
          </ion-row>
        </ion-grid>

        <organism-footer></organism-footer>
      </ion-content>
    );
  }

}
