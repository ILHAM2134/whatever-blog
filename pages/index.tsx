import { Box } from "@mui/material";

import Client from '@/sanity-config'
import Jumbotron from "@/components/home/Jumbotron";
import RecentPosts from "@/components/home/RecentPosts";

export default function Home({ post, categories }: { post: any, categories: any }) {
  console.log(post)
  return (
    <Box sx={{ maxWidth: 1100, width: "100%" }}>
      <Jumbotron />
      <RecentPosts post={post} categories={categories} />
    </Box>
  );
}

export const getServerSideProps = async () => {
  const post = await Client.fetch(
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

  const categories = await Client.fetch(`
    *[_type == 'category']{'name': title, "id": _id}
  `);

  console.log(categories)

  return {
    props: {
      post,
      categories,
    },
  };
};
