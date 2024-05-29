import React from "react";

const PopularPost = () => {
    return (
      <>
        <div className="w3-card w3-margin">
          <div className="w3-container w3-padding">
            <h4>Popular Posts</h4>
          </div>
          <ul className="w3-ul w3-hoverable w3-white">
            <li className="w3-padding-16">
              <img
                src="https://www.w3schools.com/w3images/workshop.jpg"
                alt="Image"
                className="w3-left w3-margin-right"
              />
              <div className="image-title">
                <span className="w3-large">Lorem</span>
                <span>Sed mattis nunc</span>
              </div>
            </li>
            <li className="w3-padding-16">
              <img
                src="https://www.w3schools.com/w3images/gondol.jpg"
                alt="Image"
                className="w3-left w3-margin-right"
              />
              <div className="image-title">
                <span className="w3-large">Lorem</span>
                <span>Sed mattis nunc</span>
              </div>
            </li>
            <li className="w3-padding-16">
              <img
                src="https://www.w3schools.com/w3images/skies.jpg"
                alt="Image"
                className="w3-left w3-margin-right"
              />
              <div className="image-title">
                <span className="w3-large">Lorem</span>
                <span>Sed mattis nunc</span>
              </div>
            </li>
            <li className="w3-padding-16 w3-hide-medium w3-hide-small">
              <img
                src="https://www.w3schools.com/w3images/rock.jpg"
                alt="Image"
                className="w3-left w3-margin-right"
              />
              <div className="image-title">
                <span className="w3-large">Lorem</span>
                <span>Sed mattis nunc</span>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
}

export default PopularPost;