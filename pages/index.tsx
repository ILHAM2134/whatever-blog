import { Box } from "@mui/material";

import Jumbotron from "@/components/home/Jumbotron";
import RecentPosts from "@/components/home/RecentPosts";

export default function Home({ authors }: { authors: any[] }) {
  return (
    <Box sx={{ maxWidth: 1100, width: "100%" }}>
      <Jumbotron />
      <RecentPosts />
    </Box>
  );
}
