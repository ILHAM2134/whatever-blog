import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Client from "@/sanity-config";
import RecentBlogCard from "../small-components/RecentBlogCard";

const RecentPosts = () => {
  const [post, setPost] = useState([]);

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
    }`
      );

      setPost(postList);
    };

    getData();
  }, []);

  return (
    <Box sx={{ width: "100%", mt: "100vh" }}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm>
          <Box>
            <Typography variant="h3">Recent Posts</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm>
          {post.length > 0 &&
            post.map((data) => <RecentBlogCard post={data} />)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecentPosts;
