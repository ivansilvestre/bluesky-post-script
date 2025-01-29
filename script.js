import { AtpAgent, RichText } from "@atproto/api";
import "dotenv/config";

async function postToBluesky(text) {
  const agent = new AtpAgent({ service: "https://bsky.social" });

  if (text.length > 300) {
    console.warn("Text exceeds Bluesky's 300-character limit.");
    throw error;
  }

  try {
    await agent.login({
      identifier: process.env.BLUESKY_USERNAME,
      password: process.env.BLUESKY_PASSWORD,
    });

    const rt = new RichText({ text });
    await rt.detectFacets(agent);

    const post = {
      $type: "app.bsky.feed.post",
      text: rt.text,
      facets: rt.facets,
      createdAt: new Date().toISOString(),
    };

    const response = await agent.post(post);

    console.log(response);
    return response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}

postToBluesky("test api");
