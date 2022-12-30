import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Post from "./Post/Post";
import ShowPost from "./ShowPost/ShowPost";
import Staticfeed from "./Staticfeed";

const Feed = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Post />
      {user?.uid ? <ShowPost /> : <Staticfeed />}
    </div>
  );
};

export default Feed;
