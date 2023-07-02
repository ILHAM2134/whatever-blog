import { Box, useMediaQuery, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";

import bg from "@/public/img/1.jumbotron.jpg";
import jumbotron1 from "@/public/img/2.jumbotron.jpg";
import jumbotron2 from "@/public/img/3.jumbotron.jpg";

import { useEffect, useState } from "react";
import { useAppContext } from "@/state/RootContext";

import { motion } from "framer-motion";

const Jumbotron = () => {
  const [context, setContext] = useAppContext();

  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Image
        src={bg}
        alt="jumbotron"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Box
        sx={{
          color: "white",
          width: "100%",
          height: "80vh",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: context.darkMode
            ? "rgba(0, 0, 0, 0.8)"
            : "rgba(175, 175, 175, 0.7)",
          zIndex: 200,
        }}
      >
        <Box
          sx={{
            maxWidth: 1100,
            width: "100%",
            mx: "auto",
            px: {
              xs: 1,
              sm: 2,
              md: 3,
            },
            mt: {
              xs: "25vh",
            },
          }}
        >
          <motion.div
            whileHover={{ rotate: 2, opacity: 0.9, scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                letterSpacing: "3px",
                textAlign: { xs: "center", lg: "left" },
                fontSize: {
                  xs: "2rem",
                  sm: "4rem",
                  lg: "6rem",
                },
              }}
              style={{
                display: "block",
                color: context.darkMode ? "white" : "black",
              }}
            >
              #ReadWhateverYouWant
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: [0, 1], scale: 1 }}
            transition={{ duration: 2 }}
          >
            <Typography
              variant="h5"
              sx={{
                mt: { xs: 4, md: 3 },
                fontWeight: 200,
                letterSpacing: "1px",
                textAlign: { xs: "center", lg: "left" },
              }}
              style={{
                display: "block",
                color: context.darkMode ? "white" : "black",
              }}
            >
              this blog contains whatever random various topics that fulfill
              your daily dose of randomness
            </Typography>
          </motion.div>
          <motion.div
            whileHover={{ opacity: 0.9 }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: [0, 1], scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="contained"
              sx={{
                fontSize: "1.1rem",
                fontWeight: 600,
                mt: 3,
                px: 2,
                display: "block",
                width: "120px",
                py: 1,
                mx: { xs: "auto", lg: 0 },
              }}
              href="#post"
            >
              Start Reading
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Jumbotron;
