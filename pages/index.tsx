import Image from "next/image";
import styles from "@/app/page.module.css";
import { Grid, Box, Typography, Button } from "@mui/material";

import Jumbotron from "@/components/home/Jumbotron";

export default function Home({ authors }: { authors: any[] }) {
  return (
    <Box sx={{ maxWidth: 1100, width: "100%" }}>
      <Jumbotron />
    </Box>
  );
}
