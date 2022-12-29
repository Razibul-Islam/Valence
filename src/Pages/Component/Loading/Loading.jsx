import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Loading = () => {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <div>Loading Loading Loading ...</div>;
  }
  if (user) {
    return user;
  }
};

export default Loading;
