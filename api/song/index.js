import contentful from "contentful";

const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } = process.env;

const contentful_client = contentful.createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  space: CONTENTFUL_SPACE_ID,
});

export async function handler(request) {
  const id = request.path.split("/").pop();
  const song = await contentful_client.getEntry(id);
  return {
    statusCode: 200,
    body: JSON.stringify(song),
  };
}
