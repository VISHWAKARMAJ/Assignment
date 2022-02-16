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
  // useEffect(() => {}, []);
  return (
    <>
      {/* <h2> hello</h2> */}
      {data.map((obj) => {
        return (
          // <li>
          <div>
            <li>
              {obj.name}({obj.username}) email:{obj.email}
              {obj.address.street}
              {obj.address.suite}
              {obj.address.city}
              {obj.address.zipcode}
              {obj.address.geo.lat}
              {obj.address.geo.lng}
              {obj.phone}
              {obj.website}
              {obj.company.name}
              {obj.company.catchPhrase}
              {obj.company.bs}
            </li>
          </div>
          // </li>
        );
      })}{" "}
    </>
  );
}
