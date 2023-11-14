import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "organism-header",
})
export class OrganismHeader {
  @Prop() backHref = null;

  render() {
    return (
      <ion-header>
        <ion-toolbar mode="ios" color="primary" style={{ opacity: "0.9" }}>
          {this.backHref && (
            <ion-buttons slot="start">
              <ion-back-button mode="md" href={this.backHref} defaultHref="/"></ion-back-button>
            </ion-buttons>
          )}
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
