import React, { useState } from "react";
import Header from "../common/header";
import "./adminPannel.css";
import AdminForm from "./adminform";
import axios from "axios";
import { toast } from "react-toastify";
import BlogCard from "../layouts/mainBlogCard/blogCard";

const AdminPannel = () => {
  const [formdata, setformdata] = useState({
    heading: "",
    title: "",
    description: "",
    image: "",
  });

  const SubmitHandle = async (formdata) => {
    try {
      const response = await axios.post(
        "http://localhost:4001/api/blog",
        formdata
      );
      console.log(response.data);
      toast.success("Blog Added Successfully");
    } catch (error) {
      console.error("Error submitting the data", error);
      toast.error("Error creating blog");
    }
  };

  const handleChanges = (e) => {
    if (e.target.name === "image") {
      setformdata({
        ...formdata,
        image: e.target.value,
      });
    } else {
      setformdata({
        ...formdata,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="mainClass">
      <div>
        <Header name={"Create New Blog"} display={"none"} />
      </div>
      <div className="mainBody">
        <div className="container-form">
          <AdminForm
            formdata={formdata}
            handleChanges={handleChanges}
            SubmitHandle={SubmitHandle}
          />
        </div>
        <div className="container">
          <BlogCard key={formdata.id} post={formdata} />
        </div>
      </div>
    </div>
  );
};

export default AdminPannel;
