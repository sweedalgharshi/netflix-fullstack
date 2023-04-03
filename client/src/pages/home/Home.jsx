import "./Home.scss";

import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const response = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjJkOThiNmIzMWFhZDZlOGFjNzk5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDUwMjI5OSwiZXhwIjoxNjgwOTM0Mjk5fQ.BLnT_I-CD15aR_91shvJu-V0cRK3p29iOk7Wtfciiw0",
            },
          }
        );

        setLists(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomLists();
  }, [genre, type]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list, id) => {
        return <List list={list} key={id} />;
      })}
    </div>
  );
};

export default Home;
