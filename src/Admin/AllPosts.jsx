import React, { useEffect, useState } from "react";

export default function AllPosts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("your-api-url-here")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div className="col-md-10 p-5 align-items-center">
      <h1 className="text-center mb-4">Post News</h1>
      <div className="row justify-content-center">
        {data.length > 0 ? (
          data.map((d, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{d.title}</h5>
                  <p className="card-text">{d.content}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
