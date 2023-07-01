import { Box, Grid, Typography, Card } from "@mui/material";

const RecentBlogCard = ({ post }: { post: any }) => {
  console.log(post);
  return (
    <Card>
      <Typography variant="h2">{post.author.name}</Typography>
    </Card>
  );
};

export default RecentBlogCard;
