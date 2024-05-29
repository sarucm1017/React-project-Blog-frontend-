import React, { useState } from "react";
import ReactTimeAgo from "react-time-ago";


const BlogCard = (props) => {
  const post = props.post;
  const [FullDescriptionShow, setFullDescriptionShow] = useState(false);

  const  isValidDate = (date) =>{
    return !isNaN(Date.parse(date));
  };
  
  return (
    <>
        <div
          className="w3-card-4 w3-margin w3-white first-content">
          <img src={post.image || "/backgroundimg.jpg"} alt={`Blogs${post.id}`} />
          <div className="w3-container">
            <h3>
              <b>{post.heading ||"heading"}</b>
            </h3>
            <h5>
              {post.title || "title"}, <span className="w3-opacity">
                {isValidDate(post.createdAt)? 
                (<ReactTimeAgo date={new Date(post.createdAt)} locale="en-Us"/>):("Blog Posting Date")}
              </span>
            </h5>
          </div>

          <div className="w3-container">
            <p>
              {FullDescriptionShow
                ? post.description
                : post.description.length > 150
                ? post.description.slice(0, 200) + "..."
                : post.description || "description"}
            </p>
            
            <div className="w3-row">
              <div className="w3-col m8 s12">
                <p>
                {post.description.length > 300 && (
                    <button
                      className="w3-button w3-padding-large w3-white w3-border"
                      onClick={() =>  setFullDescriptionShow(prev => !prev)}
                    >
                      {FullDescriptionShow ? (
                        <>READ LESS</>
                      ) : (
                        <>READ MORE</>
                      )}
                    </button>
                  )}
                </p>
              </div>
              <div className="w3-col m4 w3-hide-small">
                <p>
                  <span className="w3-padding-large w3-right">
                    <b>Comments  </b> <span className="w3-tag">0</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
   
    </>
  );
};

export default BlogCard;
