import { useLocation } from "react-router";

function Profile() {
  const location = useLocation();
  const userId = location.state.userId;

  return (
    <div>
      <div className="m-4">Profile Page</div>
      <div className="m-4">UserId: {userId}</div>
    </div>
  );
}

export default Profile;
