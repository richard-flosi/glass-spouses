import { Component, State, h } from "@stencil/core";

@Component({
  tag: "organism-album-art",
})
export class OrganismAlbumArt {
  @State() songs = null;
  @State() songIndex = 0;
  @State() intervalId = null;

  async componentWillLoad() {
    const response = await fetch("/api/songs");
    const json = await response.json();
    this.songs = json;

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = setInterval(() => this.setSongIndex(), 500);
  }

  async componentWillUnload() {
    alert("unload");

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  setSongIndex() {
    const numberOfSongs = this.songs.items.length - 1;

    if (this.songIndex >= numberOfSongs) {
      this.songIndex = 0;
    } else {
      this.songIndex += 1;
    }
  }

  hasSongArt() {
    return Boolean(this.songs?.items[this.songIndex].fields?.art?.fields?.file?.url);
  }

  getSongArt() {
    return this.songs.items[this.songIndex].fields.art.fields.file.url;
  }

  render() {
    return (
      <ion-card href="/songs">
        <ion-img alt="Glass Spouses" src={this.getSongArt()}></ion-img>
      </ion-card>
    );
  }
}
