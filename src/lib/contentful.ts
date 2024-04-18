import { createClient } from "contentful";

const contentful = createClient({
  space: process.env.EXPO_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.EXPO_PUBLIC_CONTENTFUL_DELIVERY_API_KEY || "",
});

export default contentful;
