import { Component, State, Fragment, h } from "@stencil/core";

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

  renderArt({ song, art }) {
    return (
      <ion-card class="ion-no-margin">
        {art && <img alt={`${song} artwork`} src={art} />}
        <ion-card-header>
          <ion-card-title>{song}</ion-card-title>
          <ion-card-subtitle>by Glass Spouses</ion-card-subtitle>
        </ion-card-header>
      </ion-card>
    );
  }

  renderAmazonMusic({ song, amazonMusicEmbedUrl }) {
    if (amazonMusicEmbedUrl) {
      return (
        <iframe
          width="355px"
          height="400px"
          src={amazonMusicEmbedUrl}
          title={`Amazon Music player: ${song} by Glass Spouses`}
          style={{
            display: "block",
            margin: "auto",
            border: "none",
            borderRadius: "4px",
            boxShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
          }}
        ></iframe>
      );
    }
    return null;
  }

  renderYouTubeUrl({ song, youTubeUrl }) {
    if (youTubeUrl) {
      return (
        <iframe
          width="355px"
          height="200px"
          src={youTubeUrl}
          title={`YouTube video player: ${song} by Glass Spouses`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            display: "block",
            margin: "auto",
            border: "none",
            borderRadius: "4px",
            boxShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
          }}
        ></iframe>
      );
    }
    return null;
  }

  renderLyrics({ lyrics }) {
    if (lyrics) {
      return (
        <Fragment>
          <h2>Lyrics</h2>
          {lyrics?.split("\n").map((line) => {
            return (
              <Fragment>
                {line}
                <br />
              </Fragment>
            );
          })}
        </Fragment>
      );
    }
    return null;
  }

  renderChords({ chords }) {
    if (chords) {
      return (
        <Fragment>
          <h2>Chords</h2>
          {chords?.split("\n").map((line) => {
            return (
              <Fragment>
                {line}
                <br />
              </Fragment>
            );
          })}
        </Fragment>
      );
    }
    return null;
  }

  render() {
    const song = this.song.fields.name;
    const art = this.song.fields?.art?.fields?.file?.url;
    const amazonMusicEmbedUrl = this.song.fields?.amazonMusicEmbedUrl;
    const youTubeTopicUrl = this.song.fields?.youTubeTopicUrl;
    const youTubeMusicVideoUrl = this.song.fields?.youTubeMusicVideoUrl;
    const lyrics = this.song.fields?.lyrics;
    const chords = this.song.fields?.chords;
    return (
      <ion-content color="secondary">
        <organism-header backHref="/songs"></organism-header>

        <ion-grid fixed>
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col sizeXs="12" sizeSm="6" sizeLg="3">
              {this.renderArt({ song, art })}
            </ion-col>
          </ion-row>
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col size="auto">{this.renderYouTubeUrl({ song, youTubeUrl: youTubeMusicVideoUrl })}</ion-col>
          </ion-row>
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col size="auto">{this.renderYouTubeUrl({ song, youTubeUrl: youTubeTopicUrl })}</ion-col>
          </ion-row>
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col size="auto">{this.renderAmazonMusic({ song, amazonMusicEmbedUrl })}</ion-col>
          </ion-row>
          <ion-row class="ion-align-items-start ion-justify-content-center">
            <ion-col sizeXs="12" sizeLg="6">
              {this.renderLyrics({ lyrics })}
            </ion-col>
            <ion-col sizeXs="12" sizeLg="6">
              {this.renderChords({ chords })}
            </ion-col>
          </ion-row>
        </ion-grid>

        <organism-footer></organism-footer>
      </ion-content>
    );
  }
}
