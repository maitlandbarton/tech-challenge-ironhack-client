import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PhoneList() {

    const [phoneList, setPhoneList] = useState([]);

  const loadData = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/phones`)
      .then((response) => {
        setPhoneList(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  if (phoneList === null) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div>
        {phoneList.map((phone) => {
          return (
          <div key={phone._id}>
            <h1>{phone.name}</h1>
            <img></img>
          </div>
        )
        })}
      </div>
    </section>
  );
}

export default PhoneList;