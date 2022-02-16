import React from "react";
import { useEffect, useState } from "react";

export default function Hello() {
  const [data, setData] = useState([]);
  const Api = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(Api)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data.map((obj) => {
        return (
          <div
            style={{
              display: "block",
              position: "relative",
              // position: "raletive",
              height: "250px",
              // width:"600px",
              margin: "10px",
              padding: "10px",

              background: "yellow"
            }}
          >
            <h1> {obj.name}</h1>
            <p>
              <span>Email : </span>
              {obj.email}{" "}
            </p>
            <p>
              <span>Phone:</span>
              {obj.phone}{" "}
            </p>
            <p>
              <span>Company:</span> {obj.company.name}{" "}
            </p>
            <p>
              <span>website:</span> {obj.website}{" "}
            </p>
            <p>
              <span>Address:</span>
              {obj.address.street}
              {obj.address.suite}
              {obj.address.city}
              {obj.address.zipcode}
            </p>
          </div>
        );
      })}{" "}
    </>
  );
}
