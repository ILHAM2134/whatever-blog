import Client from "@/sanity-config";
import {
  Grid,
  Box,
  Typography,
  Avatar,
  Divider,
  Stack,
  Chip,
  Card,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const Post = ({ pageData }: { pageData: any }) => {
  console.log(pageData);
  const router = useRouter()

  return (
    <Box
      sx={{
        maxWidth: 1100,
        width: "100%",
        px: { xs: 2, sm: 3, lg: "auto" },
        mb: 20,
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, mt: { md: "100px" }, textAlign: "center" }}
      >
        {pageData?.title}
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", sm: "80%", md: "75%", mt: 10 },
          height: "300px",
          mx: "auto",
        }}
      >
        <Image
          src={pageData?.mainImage}
          alt={pageData?.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <Box
        sx={{
          mt: 5,
          width: { xs: "100%", sm: "80%", md: "75%", mt: 10 },
          mx: "auto",
        }}
      >
        <Typography variant="h6">
          {pageData?.body?.length > 0 &&
            pageData?.body
              .map((text) => {
                const bodyChild = text.children
                  .map((child) => {
                    return child.text;
                  })
                  .join("");

                return bodyChild;
              })
              .join("")}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{ mt: 5, flexWrap: "wrap", gap: 1 }}
        >
          {pageData?.categories?.length > 0 &&
            pageData?.categories.map((data) => (
              <Chip label={`${data}`} variant="outlined" />
            ))}
        </Stack>
      </Box>

      <Box
        sx={{
          mt: 5,
          width: { xs: "100%", sm: "80%", md: "75%", mt: 10 },
          mx: "auto",
        }}
      >
        <Divider variant="middle" sx={{ my: 3 }} />
        <Card sx={{ py: 2, px: 3, cursor: "pointer" }} onClick={() => router.push(`/author/${pageData?.author?.id}`)}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Written by
          </Typography>
          <Grid container spacing={2} alignItems="center" sx={{mt: 2}}>
            <Grid item>
              <Avatar
                variant="rounded"
                src={pageData?.author?.img}
                alt={pageData?.author?.name}
                sx={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {pageData?.author?.name}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {pageData?.author?.bio?.length > 0 &&
              pageData?.author?.bio.map((bio) => {
                const bioStr = bio.children.map((str) => str.text).join("");
                console.log(bio);
                console.log(bioStr);
                return bioStr;
              })}
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default Post;

export const getServerSideProps = async ({ params }) => {
  const pageData = await Client.fetch(`
        *[_type == 'post'] {
            ...,
            "slug": slug.current,
            "mainImage": mainImage.asset->.url,

            "categories": categories[]->.title,
            "author": author-> {
              "id": _id,
              name,
              bio,
              "img": image.asset->.url
            }
        } [slug == "${params.slug}"]
    `);

  console.log(pageData.author?.bio);

  return {
    props: {
      pageData: pageData[0],
    },
  };
};
