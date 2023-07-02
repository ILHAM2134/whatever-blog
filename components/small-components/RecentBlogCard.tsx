import { Box, Grid, Typography, Card, Chip, Stack } from "@mui/material";

const RecentBlogCard = ({ post }: { post: any }) => {
  console.log(post);
  return (
    <Card sx={{ py: 2, px: 3, my: 2 }}>
      <Stack direction="row" spacing={1}>
        {post?.categories?.map((data) => (
          <Chip label={`#${data}`} variant="outlined" />
        ))}
      </Stack>
      <Typography variant="h3">{post?.title}</Typography>
    </Card>
  );
};

export default RecentBlogCard;
