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
        height: "100vh",
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
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: context.darkMode
            ? "rgba(0, 0, 0, 0.7)"
            : "rgba(175, 175, 175, 0.5)",
          zIndex: 200,
        }}
      >
        <Box
          sx={{
            position: "relative",
            top: {
              xs: "40vh",
              sm: '55vh'
            },
            maxWidth: 1100,
            width: "100%",
            mx: "auto",
            px: {
              xs: 1,
              sm: 2,
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
        </Box>
      </Box>
    </Box>
  );
};

export default Jumbotron;
