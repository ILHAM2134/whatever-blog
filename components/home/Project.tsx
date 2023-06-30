import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <Box
      id="projects"
      sx={{
        mt: {
          xs: 24,
          md: 16,
        },
        pt: {
          xs: 5,
          md: 3,
        },
        minHeight: "100vh",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, scale: 0.5, y: -50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          Projects Highlight
          <hr
            style={{ border: "1px solid", width: "100px", marginLeft: "250px" }}
          />
        </Typography>
      </motion.div>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </Box>
  );
};

export default Project;
