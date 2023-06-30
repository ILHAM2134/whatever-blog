import { createClient } from "next-sanity";

//  const Client = createClient({
//     projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//     dataset: process.env.NEXT_PUBLIC_DATASET,
//     apiVersion: "2023-06-25",
//     useCdn: false,
//   });

const Client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  apiVersion: "2023-06-25",
  useCdn: false,
});

export default Client;
