import { Component, State, h } from "@stencil/core";

@Component({
  tag: "page-songs",
})
export class PageSongs {
  @State() songs = null;

  async componentWillLoad() {
    const response = await fetch("/api/songs");
    const json = await response.json();
    this.songs = json;
  }

  render() {
    return (
      <ion-content color="secondary">
        <organism-header></organism-header>

        <ion-grid fixed>
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <ion-text class="ion-text-center">
                <h1>Songs</h1>
              </ion-text>
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <ion-text class="ion-text-center">
                <p>Explore the catalog of songs by Glass Spouses.</p>
              </ion-text>
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col sizeXs="12" sizeLg="6">
              <ion-list class="ion-no-padding">
                {this.songs.items.map((song) => {
                  return (
                    <ion-item color="primary" lines="none" detail href={`/song/${song.sys.id}`}>
                      {song.fields.name}
                    </ion-item>
                  );
                })}
              </ion-list>
            </ion-col>
          </ion-row>
        </ion-grid>

        <organism-footer></organism-footer>
      </ion-content>
    );
  }
}
