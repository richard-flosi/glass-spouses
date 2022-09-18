import { Component, h } from "@stencil/core";

@Component({
  tag: "page-contact",
})
export class PageContact {
  async handleSubmit(event) {
    event.stopPropagation();
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const { name, email, message } = data;
    /* @ts-ignore */
    const body = new URLSearchParams({ name, email, message }).toString();
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  }

  render() {
    return (
      <ion-content color="secondary">
        <organism-header></organism-header>

        <ion-grid fixed>
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <ion-text class="ion-text-center">
                <h1>Contact Us</h1>
              </ion-text>
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <ion-text class="ion-text-center">
                <p>Hi! We're glad you found us. Please stay connected. Use this contact for to send us a message. Thanks!</p>
              </ion-text>
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col>
              <form id="contact" name="contact" method="POST" data-netlify="true" class="ion-padding" onSubmit={this.handleSubmit}>
                <ion-grid>
                  <ion-row class="ion-align-items-center ion-justify-content-center">
                    <ion-col>
                      <ion-item>
                        <ion-label position="stacked" color="dark">Name</ion-label>
                        <ion-input type="text" inputmode="text" name="name" placeholder="Your Name" required={true}></ion-input>
                      </ion-item>
                    </ion-col>
                    <ion-col>
                      <ion-item>
                        <ion-label position="stacked" color="dark">Email</ion-label>
                        <ion-input type="email" inputmode="email" name="email" placeholder="Your Email" required={true}></ion-input>
                      </ion-item>
                    </ion-col>
                  </ion-row>
                  <ion-row class="ion-align-items-center ion-justify-content-center">
                    <ion-col>
                      <ion-item>
                        <ion-label position="stacked" color="dark">Message</ion-label>
                        <ion-textarea rows={5} auto-grow={true} inputmode="text" name="message" placeholder="Your Message" required={true}></ion-textarea>
                      </ion-item>
                    </ion-col>
                  </ion-row>
                  <ion-row class="ion-align-items-center ion-justify-content-center ion-padding-top">
                    <ion-col size="auto">
                      <ion-button type="submit">Send Your Message</ion-button>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </form>
            </ion-col>
          </ion-row>
        </ion-grid>

        <organism-footer></organism-footer>
      </ion-content>
    );
  }

}
