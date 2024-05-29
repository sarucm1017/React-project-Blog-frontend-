import React from "react";
import { useForm } from "react-hook-form";

// const AdminForm = ({formdata,handleChanges,SubmitHandle}) =>
const AdminForm = ({ formdata, handleChanges, SubmitHandle }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    SubmitHandle(data);
  };
  return (
    <>
      <div className="formContainer">
        <form id="blogForm" onSubmit={handleSubmit(onSubmit)} noValidate>
          <h3 className="formHeading"> Blog Form</h3>
          <label htmlFor="image">Image Url</label>

          <input
            id="image"
            type="text"
            placeholder="url"
            name="image"
            {...register("image")}
            value={formdata.image}
            onChange={handleChanges}
          />
          <label htmlFor="heading">Heading</label>
          <input
            name="heading"
            id="heading"
            type="text"
            placeholder="heading"
            {...register("heading")}
            value={formdata.heading}
            onChange={handleChanges}
          />
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="title"
            name="title"
            {...register("title")}
            value={formdata.title}
            onChange={handleChanges}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            type="text"
            placeholder="description"
            name="description"
            {...register("description")}
            value={formdata.description}
            onChange={handleChanges}
          />
          <button type="submit" className="btn">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminForm;
