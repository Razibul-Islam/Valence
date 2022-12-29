import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Loading from "../../../Component/Loading/Loading";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);
<Loading/>
  const { data, isLoading } = useQuery({
    queryKey: ["userEmail"],
    queryFn: async () => {
      console.log(user?.email);
      const res = await fetch(
        `http://localhost:5000/user?userEmail=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <div>loading...</div>;
  }
//   if (loading) {
//     return <div>loaddddinnnggggg......</div>;
//   }
  console.log(data);

  return (
    <div>
      <span className="font-semibold text-2xl">
        <Link to="/" className="flex gap-3 items-center mb-5 mt-7">
          <AiOutlineArrowLeft />
          <span>Razibul Islam</span>
        </Link>
      </span>
      <div className="w-full h-96 bg-blue-500">
        <div></div>
      </div>
    </div>
  );
};

export default Profile;
