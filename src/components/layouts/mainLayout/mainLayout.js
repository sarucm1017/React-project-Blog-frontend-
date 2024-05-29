import React, { useEffect, useState } from "react";
import "./mainComponents.css";
import Header from "../../common/header";
import BlogCard from "../mainBlogCard/blogCard";
import Footer from "../footer/footer";
import MainSideSection from "../mainSideSection/mainSideSection";
import axios from "axios";

const MainLayout = () => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/api/blog")
      .then((response) => {
        const blog = response.data.slice().reverse();
        console.log(response.data);
        setblogs(blog);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="w3-content main-container">
        <Header
          name={"MY BLOG"}
          title={"Welcome to the Blogs"}
          admin={"Saru"}
        />
        <div className="w3-row">
          <div className="w3-col l8 s12">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} post={blog} />
            ))}
          </div>

          <div className="w3-col l4">
            <MainSideSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
