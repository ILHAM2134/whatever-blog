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
import RecentBlogCard from "../small-components/RecentBlogCard";
import { useAppContext } from "@/state/RootContext";
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

const RecentPosts = ({ post, categories }: { post: any; categories: any }) => {
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

  console.log(post);
  const [context, setContext] = useAppContext();

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
            {post?.length > 0 &&
              post?.map((data) => <RecentBlogCard post={data} />)}
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
                  <Chip
                    label={`${data?.name}`}
                    variant="outlined"
                    onClick={() => router.push(`/category/${data?.id}`)}
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
                  target='_blank'
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

export default RecentPosts;
