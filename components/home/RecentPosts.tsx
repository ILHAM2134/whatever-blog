import {
  Box,
  Grid,
  Typography,
  Stack,
  Chip,
  Divider,
  Container,
  CssBaseline,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Client from "@/sanity-config";
import RecentBlogCard from "../small-components/RecentBlogCard";
import { useAppContext } from "@/state/RootContext";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: "8rem",
    minWidth: "275",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const RecentPosts = () => {
  const classes = useStyles();
  const [post, setPost] = useState([]);
  const [categories, setCategories] = useState([]);

  const [context, setContext] = useAppContext();

  useEffect(() => {
    const getData = async () => {
      const postList = await Client.fetch(
        `*[_type == 'post'] {
        'id': _id,
        'created_at': _createdAt,
        'updated_at': _updatedAt,
        'author': author->{
            name ,
            'id': _id,
            bio,
            'img': image.asset->.url,
        },
        body,
        'categories': categories[]->.title,
        'mainImage': mainImage.asset->.url,
        'slug': slug.current,
        title
    }[0...10]`
      );

      setPost(postList);

      const categoryList = await Client.fetch(`
        *[_type == 'category'].title
      `);

      setCategories(categoryList);
    };

    getData();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1300px",
        mx: "auto",
        px: 2,
        marginTop: "95vh",
        minHeight: "100vh",
        mb: 3,
      }}
    >
      <CssBaseline />
      <Container fixed id="post">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={8}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 900 }}>
                Recent Posts
              </Typography>
            </Box>
            {post.length > 0 &&
              post.map((data) => <RecentBlogCard post={data} />)}
          </Grid>
          <Grid item xs={12} sm sx={{ px: 0, mt: 2 }}>
            <Box className={classes.root}>
              <Typography variant="h5" sx={{ fontWeight: 900, opacity: 0.5 }}>
                Discover more of what matter to you
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ mt: 1, flexWrap: "wrap", gap: 1 }}
              >
                {categories?.map((data) => (
                  <Chip label={`${data}`} variant="outlined" />
                ))}
              </Stack>
              <Divider sx={{ my: 3 }} />
              <Stack
                direction="row"
                spacing={1}
                sx={{ mt: 1, flexWrap: "wrap", gap: 1 }}
              >
                <Button variant="text">Help</Button>
                <Button variant="text">Status</Button>
                <Button variant="text">Terms & Conditions</Button>
                <Button variant="text">Start Writing</Button>
                <Button variant="text">Privacy Policy</Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RecentPosts;
