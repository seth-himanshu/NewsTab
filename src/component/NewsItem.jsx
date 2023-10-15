import React from "react";

const NewsItem = ({ title, desc, urlToImage, url, author, date }) => {
    return (
      <div
        className="card"
        style={{ width: "358px", height: "358px", boxShadow: "none" }}
      >
        <img
          style={{ width: 356, height: 180 }}
          src={
            !urlToImage
              ? "https://as1.ftcdn.net/v2/jpg/02/48/42/64/1000_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
              : urlToImage
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body" style={{ height: "180x" }}>
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{desc}...</p>
          <div className="d-flex justify-content-between">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              style={{ height: "20x" }}
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
            <p className="card-text mx-2"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    );
  }

  export default NewsItem;