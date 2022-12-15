import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllDataUser } from "../../https/userRequest";
import randomUser from "../../utils/fetch";
import User from "../User/User";

const FollowersCard = () => {
  const { token, user } = useSelector((state) => state.authSlice);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    // randomUser().then((datos) => setFollowers(datos.results));
    getAllDataUser(token).then((datos) => setPersons(datos.data));
  }, []);

  return (
    // followersCard
    <div className="w-[100%] rounded-[0.7rem] gap-[1rem] flex flex-col text-[14px]">
      <h3>People you may know</h3>
      {persons != null &&
        persons.map((data) => {
          if (data.id !== user.id) return <User key={data.id} data={data} />;
        })}
    </div>
  );
};

export default FollowersCard;
