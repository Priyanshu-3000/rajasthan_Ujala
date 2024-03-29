import { useEffect, useState } from "react";

export default function Content() {
  const [post, setpost] = useState([]);

  const posts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((post) => setpost(post.products));
  };

  useEffect(() => {
    posts();
  }, []);

  return (
    <>
      <div className="container p-3">
        <div className="row">
          {post.map((products) => {
            return (
              <div
                className="card m-3"
                key={products.id}
                style={{ width: "18rem" }}
              >
                <img
                  className="p-3 card-img-top"
                  src={products.thumbnail}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{products.title}</h5>
                  <p className="card-text">{products.description}</p>
                  <a href="#" className="btn btn-primary">
                    {products.brand}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
