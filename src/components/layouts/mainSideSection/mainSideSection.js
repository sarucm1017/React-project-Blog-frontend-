import React from "react";

import SubBlogSection from "./blogSubSection";
import PopularPost from "./popularPost";
import BlogTags from "./BlogTags";

const MainSideSection = () => {
  return (
    <>
      <SubBlogSection />

      <PopularPost />

      <BlogTags />
    </>
  );
};

export default MainSideSection;