import Client from "@/sanity-config";
import {
  Grid,
  Container,
  Box,
  Typography,
  Avatar,
  Divider,
  Stack,
  Chip,
  Card,
  CssBaseline,
  Button,
} from "@mui/material";
import RecentBlogCard from "@/components/small-components/RecentBlogCard";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";

import Swal from "sweetalert2";

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

const Category = ({ pageData, authors }: { pageData: any; authors: any[] }) => {
  console.log(pageData);
  const router = useRouter();
  const classes = useStyles();

  const handleNotFound = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This feature under maintenance!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  };

  const handleThanks = () => {
    Swal.fire({
      icon: "success",
      title: "Thanks to..",
      html:
        "<p><a target='_blank' href='https://www.pexels.com/'><b>Pexels</b></a>, that provide many good img for assets.</p>" +
        "<br/>" +
        "<p><a target='_blank' href='https://medium.com/'><b>Medium</b></a>, i made web layout similar to this layout design.</p>" +
        "<br/>" +
        "<p>and such those great technology i used to made this website :</p>" +
        "<br/>" +
        "<p><a target='_blank' href='https://nextjs.org/'>Next.js</a></p>" +
        "<p><a target='_blank' href='https://mui.com/'>Material UI</a></p>" +
        "<p><a target='_blank' href='https://www.framer.com/motion/'>Framer Motion</a></p>" +
        "<p><a target='_blank' href='https://www.sanity.io/'>Sanity CMS</a></p>" +
        "<p><a target='_blank' href='https://vercel.com/dashboard'>Vercel</a></p>" +
        "<p><a target='_blank' href='https://sweetalert2.github.io/#download'>Sweetalert2</a></p>" +
        "<p><a target='_blank' href='https://www.typescriptlang.org/'>Typescript</a></p>",
      footer: "<p><b>Thank you!</b></p>",
    });
  };

  return (
    <Box
      sx={{
        maxWidth: 1100,
        width: "100%",
        px: { xs: 2, sm: 3, lg: "auto" },
        mb: 20,
        mt: 20,
      }}
    >
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                Author:{" "}
                {!pageData?.title ? "Author tidak ditemukan" : pageData?.title}
              </Typography>
            </Box>
            {pageData?.posts?.length > 0 ? (
              pageData?.posts?.map((data) => <RecentBlogCard post={data} />)
            ) : (
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  textAlign: "center",
                  opacity: 0.8,
                  mt: 5,
                }}
              >
                Author ini belum memiliki artikel
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm sx={{ px: 0, mt: 2 }}>
            <Box className={classes.root}>
              <Typography variant="h5" sx={{ fontWeight: 900, opacity: 0.5 }}>
                Explore other author
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ mt: 1, flexWrap: "wrap", gap: 1 }}
              >
                {authors?.map((data) => (
                  <Chip
                    label={`${data.name}`}
                    variant="outlined"
                    onClick={() => router.push(`/author/${data.id}`)}
                  />
                ))}
              </Stack>
              <Divider sx={{ my: 3 }} />
              <Stack
                direction="row"
                spacing={1}
                sx={{ mt: 1, flexWrap: "wrap", gap: 1 }}
              >
                <Button variant="text" onClick={handleThanks}>
                  Thanks to
                </Button>
                <Button
                  variant="text"
                  href="https://github.com/ILHAM2134/whatever-blog"
                  target="_blank"
                >
                  Source code
                </Button>
                <Button variant="text" onClick={handleNotFound}>
                  Terms & Conditions
                </Button>
                <Button variant="text" onClick={handleNotFound}>
                  Start Writing
                </Button>
                <Button variant="text" onClick={handleNotFound}>
                  Privacy Policy
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export const getServerSideProps = async ({ params }) => {
  const pageData = await Client.fetch(`
        *[_type == "author"] {
          "id": _id,
          "title": name,
          "img": image.asset->.url,
          "posts": *[_type=='post' && references(^._id)] {
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
          }
        } [id == "${params.id}"]
    `);

  const authors = await Client.fetch(`
    *[_type == "author"]{name, "id": _id}
  `);

  return {
    props: {
      pageData: pageData.length > 0 ? pageData[0] : [],
      authors,
    },
  };
};

export default Category;
