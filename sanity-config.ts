import { createClient } from "next-sanity";

// const env = process.env.NODE_ENV;
var Client;

// if (env == "development") {
//  Client = createClient({
//     projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//     dataset: process.env.NEXT_PUBLIC_DATASET,
//     apiVersion: "2023-06-25",
//     useCdn: false,
//   });
// } else if (env == "production") {
Client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  apiVersion: "2023-06-25",
  useCdn: false,
});
// }

export default Client;
