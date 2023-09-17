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
          <ion-row className="ion-align-items-center ion-justify-content-center">
            <ion-col sizeXs="12" sizeLg="6">
              <organism-album-art></organism-album-art>
            </ion-col>
          </ion-row>
        </ion-grid>

        <organism-footer></organism-footer>
      </ion-content>
    );
  }
}
