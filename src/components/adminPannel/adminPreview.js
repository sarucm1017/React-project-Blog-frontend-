import React from "react";

const FormPreview = ({ formdata }) => {
  return (
    <>
      <div className="form-preview">
        <div className="w3-card-4 w3-margin w3-white first-content formPreview">
          <img src={formdata.image || "/backgroundimage_form.jpg"}></img>

          <div className="w3-container">
            <h3>
              <b>{formdata.heading || "Heading"}</b>
            </h3>
          </div>

          <div className="w3-container">
            <p>{formdata.title || "Title"}</p>

            <div className="w3-row">
              <div className="w3-col m8 s12">
                <p>{formdata.description || "Description"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPreview;
