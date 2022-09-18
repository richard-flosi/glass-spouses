import { Component, h } from "@stencil/core";

@Component({
  tag: "organism-header",
})
export class OrganismHeader {
  render() {
    return (
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>
            <ion-router-link href="/">
              <ion-text color="light">Glass Spouses</ion-text>
            </ion-router-link>
          </ion-title>
          <ion-buttons slot="end">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    );
  }
}