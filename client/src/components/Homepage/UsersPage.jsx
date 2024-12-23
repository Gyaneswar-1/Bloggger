import React, { useEffect, useState } from "react";
import {
  follow,
  getFollowed,
  getFollowersById,
  getFollowedById,
  unfollowUser,
} from "../../services/apiManage.service";

function UsersPage({ pfp, name, bio, id, email }) {
  const [userFollow, setUserFollow] = useState(false);
  const [followers, setFollowers] = useState("0");
  const [following, setFollowing] = useState("0");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const followersData = await getFollowersById(id);
        setFollowers(followersData.length);

        const followedData = await getFollowedById(id);
        setFollowing(followedData.length);

        const allFollowed = await getFollowed();
        const isFollowing = allFollowed.some(
          (followedUser) => followedUser.id === id
        );
        setUserFollow(isFollowing);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleFollowClick = async () => {
    try {
      if (userFollow) {
        await unfollowUser(id);
        setFollowers((prev) => (parseInt(prev) - 1).toString());
      } else {
        await follow(id);
        setFollowers((prev) => (parseInt(prev) + 1).toString());
      }
      setUserFollow(!userFollow);
    } catch (error) {
      console.error("Error updating follow status:", error);
    }
  };

  return (
    <div className="flex flex-wrap ">
      <div className="inline-block w-80 text-sm  border rounded-lg shadow-sm text-gray-400 bg-zinc-800 border-zinc-600">
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <span>
              <img className="w-10 h-10 rounded-full" src={pfp} alt={name} />
            </span>
            <button
              className={`p-2 rounded-md ${
                userFollow
                  ? "text-zinc-600 font-medium"
                  : "text-green-600 font-semibold"
              }`}
              onClick={handleFollowClick}
            >
              {userFollow ? "Unfollow" : "Follow"}
            </button>
          </div>
          <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            {name}
          </p>
          <p className="mb-3 text-sm font-normal">{email}</p>
          <p className="mb-4 text-sm">{bio || ""}</p>
          <ul className="flex text-sm space-x-4">
            <li>
              <span className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">
                  {following}
                </span>{" "}
                Following
              </span>
            </li>
            <li>
              <span className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">
                  {followers}
                </span>{" "}
                Followers
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
