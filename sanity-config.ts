import { createClient } from "next-sanity";

// SANITY_STUDIO_PROJECT_ID=7xx7fqme
// SANITY_STUDIO_DATASET=production

const Client = createClient({
  projectId: "7xx7fqme",
  dataset: "production",
  apiVersion: "2023-06-25",
  useCdn: false,
});

// const Client = createClient({
//   projectId: process.env.SANITY_STUDIO_PROJECT_ID,
//   dataset: process.env.SANITY_STUDIO_DATASET,
//   apiVersion: "2023-06-25",
//   useCdn: false,
// });

export default Client;
