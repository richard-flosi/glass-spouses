import contentful from "contentful";

const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } = process.env;

const contentful_client = contentful.createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  space: CONTENTFUL_SPACE_ID,
});

export async function handler(request) {
  const slug = request.path.split("/").pop();
  try {
    const songs = await contentful_client.getEntries({ "content_type": "song", "fields.slug": slug });
    const song = songs.items[0];
    return {
      statusCode: 200,
      body: JSON.stringify(song),
    };
  } catch {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: `${slug} not found` }),
    };
  }
}
