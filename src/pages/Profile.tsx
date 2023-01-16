import { useLocation } from "react-router";
import { useAppContext } from "../hooks";

function Profile() {
  const location = useLocation();
  const userId = location.state.userId;
  const { user, setUser } = useAppContext();

  return (
    <div>
      <div className="m-4">Profile Page</div>
      <div className="m-4">
        UserId: {userId} (example passing data via navigation & useLocation)
      </div>
      <div className="m-4">
        User: {user.firstName} {user.lastName}
      </div>
      <button
        className="w-48 m-2 btn border-2 border-purple-800 mr-4 text-center hover:bg-purple-800 hover:text-white"
        onClick={() => {
          setUser({ firstName: "", lastName: "" });
        }}
      >
        Clear User Context
      </button>
    </div>
  );
}

export default Profile;
