//Author: Kavya_Kasaraneni

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";

const sections = [
  { title: "Technology", url: "https://www.icde.org/knowledge-hub/tag/Technology" },
  { title: "Financial", url: "https://www.crunchbase.com/organization/knowledghub/investor_financials" },
  { title: "Investments", url: "https://www.crunchbase.com/organization/knowledghub/investor_financials" },
  { title: "Employers", url: "https://www.crunchbase.com/organization/knowledghub/people" },
  { title: "Similar Companies", url: "https://www.crunchbase.com/organization/knowledghub/org_similarity_overview" },
  { title: "News", url: "https://www.crunchbase.com/organization/knowledghub/signals_and_news" },
];

const mainFeaturedPost = {
  title: "Investments in Startups",
  description:
      "Startup incubators are business programs in which startups and entrepreneurs collaborate with sponsors to get off the ground. A startup incubator helps entrepreneurs tackle the barriers that can impede growth and can help lower time to market for great products.",
  image:
    "https://content.fortune.com/wp-content/uploads/2015/10/gettyimages-4725288622.jpg",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Top Incubators",
    date: "November 20",
    description:
      "Till date the top Startup Incubators in Canada includes Techstars, PlugandPlay, Volta. Volta is an Halifax based Startup Incubator.",
    image:
      "https://img.freepik.com/free-vector/investment-crowdfunding-concept_74855-7563.jpg",
    imageLabel: "Image Text",
  },
  {
    title: "Impact Investors",
    date: "November 20",
    description:
      "As of today, we have several investors who are into impact investing. Several Top investors such as Cycle Capital, InnovaCorp etc are looking forward to invest more into the Technology",
    image:
      "https://s3.amazonaws.com/technori-bucket/wordpress/wp-content/uploads/2013/06/30020826/private-equity-vs-venture-capital-2.jpg",
    imageLabel: "Image Text",
  },
];

const theme = createTheme();

export default function KnowledgeHub() {
   //Front-end 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="KnowledgeHub" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>

    </ThemeProvider>
  );
}



// Refereneces
// https://www.crunchbase.com/organization/knowledghub/
// https://mui.com/material-ui/getting-started/templates/blog/
// https://content.fortune.com/wp-content/uploads/2015/10/gettyimages-4725288622.jpg 
// https://img.freepik.com/free-vector/investment-crowdfunding-concept_74855-7563.jpg
// https://s3.amazonaws.com/technori-bucket/wordpress/wp-content/uploads/2013/06/30020826/private-equity-vs-venture-capital-2.jpg
// https://venturexfranchise.com/blog/five-key-things-to-consider-when-investing-in-a-startup-incubator/