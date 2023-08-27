import contentful from "contentful";

const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } = process.env;

const contentful_client = contentful.createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  space: CONTENTFUL_SPACE_ID,
});

export async function handler() {
  const songs = await contentful_client.getEntries({ content_type: "song" });
  return {
    statusCode: 200,
    body: JSON.stringify(songs),
  };
}
