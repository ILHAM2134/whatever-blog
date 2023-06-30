import { Box, useMediaQuery, Typography, Button } from "@mui/material";
import Image from "next/image";

import bg from "@/public/img/1.jumbotron.jpg";
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
            ? "rgba(0, 0, 0, 0.9)"
            : "rgba(175, 175, 175, 0.5)",
          zIndex: 200,
        }}
      >
        <Box
          sx={{
            position: "relative",
            top: "35vh",
            maxWidth: 1100,
            width: "100%",
            my: {
              md: 4,
            },
            mx: "auto",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                letterSpacing: "1px",
                textAlign: { xs: "center", lg: "left" },
              }}
              style={{
                display: "block",
                color: context.darkMode ? "white" : "black",
              }}
            >
              Nice to meet you!
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
              Want to know closer about me?
            </Typography>{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: [0, 0.5, 1], scale: 1 }}
            transition={{ duration: 3 }}
          >
            <Button
              variant="contained"
              sx={{
                py: 1,
                px: 4,
                mt: { xs: 4, md: 3 },
                mx: { xs: "auto", lg: 0 },
                fontSize: "1.2rem",
                display: "block",
                width: "fit-content",
              }}
              href="#about"
            >
              Check this out!
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Jumbotron;
