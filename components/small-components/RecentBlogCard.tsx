import formatDate from "@/utility/formatDate";
import {
  Box,
  Grid,
  Typography,
  Card,
  Chip,
  Stack,
  Avatar,
} from "@mui/material";
import { useRouter } from "next/router";

const RecentBlogCard = ({ post }: { post: any }) => {
  console.log(post);
  const router = useRouter();
  return (
    <Card
      sx={{ py: 2, px: 3, my: 2, cursor: "pointer" }}
      onClick={() => router.push(`/post/${post?.slug}`)}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Avatar
            variant="rounded"
            src={post?.mainImage}
            alt={post?.author?.name}
            sx={{ width: "250px", height: "100px" }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h4" sx={{ fontWeight: 600, mt: 1 }}>
            {post?.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mt: 1, opacity: 0.8 }}
          >
            {post.body.length > 0 && (
              post?.body?
              .map((text) => {
                const bodyChild = text.children?
                  .map((child) => {
                    return child.text;
                  })
                  .join("");

                return bodyChild;
              })
              .join("").slice(0, 100)
            )}... (Read more)
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 3, display: "block" }}>
            {post?.categories?.map((data) => (
              <Chip label={`#${data}`} variant="outlined" />
            ))}
          </Stack>
          <Typography variant="body1" sx={{ fontWeight: 400, mt: 1 }}>
            Posted on {formatDate(post?.created_at)} | by {post?.author?.name}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default RecentBlogCard;
