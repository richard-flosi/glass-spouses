import { Component, State, Fragment, h } from "@stencil/core";

function head({ title, description, keywords, image, url, player }) {
  document.title = title;
  document.querySelector("link[rel='apple-touch-icon']").setAttribute("href", image);

  // meta tags
  updateMeta({ name: "description", content: description });
  updateMeta({ name: "keywords", content: keywords });

  // open graph
  updateMeta({ property: "og:title", content: title });
  updateMeta({ property: "og:description", content: description });
  updateMeta({ property: "og:url", content: url });
  updateMeta({ property: "og:image", content: image });

  // twitter
  updateMeta({ property: "twitter:title", content: title });
  updateMeta({ property: "twitter:description", content: description });
  updateMeta({ property: "twitter:image", content: image });
  updateMeta({ property: "twitter:image:alt", content: title });
  updateMeta({ property: "twitter:player", content: player });

  function updateMeta({ name = null, property = null, content = null }) {
    if (!name && !property) {
      throw new Error(`updateMeta: Expected name or property, but got: name: ${name}, property: ${property}`);
    }

    let metaQuerySelector = "";
    if (name) {
      metaQuerySelector = `meta[name="${name}"]`;
    } else if (property) {
      metaQuerySelector = `meta[property="${property}"]`;
    }
    document.querySelector(metaQuerySelector).setAttribute("content", content);
  }
}

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

  renderYouTubeUrl({ song, youTubeUrl }) {
    if (youTubeUrl) {
      return (
        <Fragment>
          <span class="ion-hide-lg-up">
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
          </span>
          <span class="ion-hide-lg-down">
            <iframe
              width="560px"
              height="315px"
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
          </span>
        </Fragment>
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
    const youTubeTopicUrl = this.song.fields?.youTubeTopicUrl;
    const youTubeMusicVideoUrl = this.song.fields?.youTubeMusicVideoUrl;
    const lyrics = this.song.fields?.lyrics;
    const chords = this.song.fields?.chords;

    head({
      title: `${song} by Glass Spouses`,
      description: `Listen to ${song} by Glass Spouses.`,
      keywords: [
        "girl in the vampire theatre, glass spouses, anne rice, vampires, novels, literary nerd, dark wave, dance music, fun, female vocals, laura cooper, richard flosi, open mic nights",
      ].join(", "),
      url: window.location.href,
      image: art,
      player: youTubeMusicVideoUrl || youTubeTopicUrl,
    });

    return (
      <ion-content color="secondary">
        <organism-header backHref="/songs"></organism-header>

        <ion-grid fixed>
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col sizeXs="12" sizeSm="6" sizeLg="3">
              {this.renderArt({ song, art })}
            </ion-col>
            <ion-col sizeXs="12" sizeLg="9">
              {this.renderYouTubeUrl({ song, youTubeUrl: youTubeMusicVideoUrl || youTubeTopicUrl })}
            </ion-col>
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
