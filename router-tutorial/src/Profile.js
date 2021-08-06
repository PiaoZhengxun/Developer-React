import React from "react";
import { withRouter } from "react-router";
import WithRouterSample from "./WithRouterSample";

const data = {
  velopert: {
    name: "박정훈",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: " 홍길동",
    description: "준인공",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default withRouter(Profile);
