import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

import lg from "@public/img/about1.jpg";
import sm from "@public/img/about2.jpg";

const About = () => {
  return (
    <Box
      id='about'
      sx={{
        mt: "100vh",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md={4}>
          <motion.div
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Box
              sx={{
                position: "relative",
                height: { xs: "40vh", md: "75vh" },
                width: { md: "300px" },
              }}
            >
              <Image
                src={lg}
                alt="jumbotron"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                style={{ borderRadius: "8px" }}
              />
            </Box>
          </motion.div>
          <Box
            sx={{
              position: "absolute",
              height: "200px",
              width: "250px",
              top: "145vh",
              left: "25vw",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Image
              src={sm}
              alt="jumbotron"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              style={{ zIndex: 300, borderRadius: "8px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{mt: {xs: 3, md: 0}}}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.5, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h5"
              sx={{ textAlign: { xs: "center", md: "left" }, fontWeight: 900 }}
            >
              Simple intro about me
              <hr style={{ border: "1px solid" }} />
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 3,
                textAlign: { xs: "center", md: "left" },
                fontWeight: 900,
              }}
            >
              and what recently i'm doing
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: { xs: "center", md: "left" },
                mt: 3,
                fontWeight: 100,
              }}
            >
              Ilham is Fullstack Web Dev Enthusiast and currently still ongoing
              to learn T3 Stack (NextJS, TypeScript, tRPC, Prisma, Tailwind, and
              NextAuth)
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
