import { Component, h } from "@stencil/core";

@Component({
  tag: "organism-video-background",
})
export class OrganismVideoBackground {
  render() {
    return (
      <video
        controls={false}
        preload="auto"
        muted
        playsinline
        autoPlay
        loop
        style={{ display: "block", position: "fixed", objectFit: "cover", overflow: "hidden", width: "100vw", height: "100vh", top: "0", left: "0" }}
      >
        <source src="/assets/video/background.mp4" type="video/mp4" />
      </video>
    );
  }
}
