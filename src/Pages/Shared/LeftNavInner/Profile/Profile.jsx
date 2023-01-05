import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Loading from "../../../Component/Loading/Loading";

const Profile = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const { data, isLoading } = useQuery({
    queryKey: ["userEmail", user?.email],
    queryFn: async () => {
      // console.log(user?.email);
      const res = await fetch(
        `http://localhost:5000/user?userEmail=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/user?userEmail=${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }, [user?.email]);

  if (isLoading) {
    return <Loading />;
  }
  // console.log(data);

  return (
    <div>
      {user?.uid ? (
        <>
          <span className="font-semibold text-2xl">
            <Link to="/" className="flex gap-3 items-center mb-5 mt-7">
              <AiOutlineArrowLeft />
              <span>{data?.userName}</span>
            </Link>
          </span>
          <div className="w-full h-80">
            <div className="h-full">
              <div className="h-full flex flex-col justify-center items-center gap-5 border-b border-b-gray-400/30">
                <img
                  src={data?.userPhoto}
                  alt=""
                  className="w-2/12 rounded-full border-4 border-black"
                />
                <h2 className="font-semibold text-[40px]">{data?.userName}</h2>
              </div>
              <div className="flex justify-between items-center px-4 py-2 rounded-sm bg-white/10">
                <h2 className="font-semibold text-2xl cursor-default select-none">
                  Profile
                </h2>
                <p className="font-semibold text-2xl text-blue-800 cursor-pointer select-none">
                  <Link to={`/user/${data?._id}`}>Edit</Link>
                </p>
              </div>
              <div className="mt-5">
                <p className="input text-lg">
                  <span className="font-semibold">Name:</span> {data?.userName}
                </p>
                <p className="input text-lg">
                  <span className="font-semibold">Email:</span>{" "}
                  {data?.userEmail}
                </p>
                <p className="input text-lg">
                  <span className="font-semibold">Address:</span>{" "}
                  {data?.address ? data?.address : "No Address added"}
                </p>
                <p className="input text-lg">
                  <span className="font-semibold">University:</span>
                  {data?.university ? data?.university : "No University added"}
                </p>
                <p className="input text-lg">
                  <span className="font-semibold">Phone: </span>
                  {data?.Phone ? data?.Phone : "No Phone added"}
                </p>
                <p className="input text-lg">
                  <span className="font-semibold">Birthday: </span>
                  {data?.Birthday ? data?.Birthday : "No Birthday added"}
                </p>
                <p className="input text-lg">
                  <span className="font-semibold">Gender: </span>
                  {data?.Gender ? data?.Gender : "No Gender added"}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="h-screen flex justify-center items-center font-bold text-5xl">
            Please Login First
          </h1>
        </>
      )}
    </div>
  );
};

export default Profile;
