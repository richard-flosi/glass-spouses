import { Component, State, h } from "@stencil/core";

@Component({
  tag: "page-song",
})
export class PageSong {
  @State() song = null;

  async componentWillLoad() {
    const id = window.location.pathname.split("/").pop();
    const response = await fetch(`/api/song/${id}`);
    const json = await response.json();
    this.song = json;
  }

  render() {
    return (
      <ion-content color="secondary">
        <organism-header backHref="/songs"></organism-header>

        <ion-grid fixed>
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <ion-text class="ion-text-center">
                <h1>{this.song.fields.name}</h1>
              </ion-text>
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col sizeXs="12" sizeLg="6">
              <img src={this.song.fields?.art?.fields?.file?.url} />
            </ion-col>
            <ion-col sizeXs="12" sizeLg="6">
              <ion-text class="ion-text-center">
                <p>Learn all about {this.song.fields.name} by Glass Spouses.</p>
              </ion-text>
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <h2>Lyrics</h2>
            </ion-col>
          </ion-row>
          {this.song.fields?.lyrics?.split("\n").map((line) => {
            return (
              <ion-row class="ion-align-items-center ion-justify-content-center">
                <ion-col>{line}</ion-col>
              </ion-row>
            );
          })}
        </ion-grid>

        <organism-footer></organism-footer>
      </ion-content>
    );
  }
}
