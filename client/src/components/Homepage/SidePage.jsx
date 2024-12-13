import React, { useEffect, useState } from "react";
import {
  follow,
  getFollowed,
  getFollowersById,
  unfollowUser,
} from "../../services/apiManage.service";

function SidePage({ pfp, name, bio, id }) {
  const [userFollow, setUserFollow] = useState(false);
  const [followers, setFollowers] = useState("0");

  useEffect(() => {
    const fetchData = async () => {
      const followersData = await getFollowersById(id);
      setFollowers(followersData.length);

      const followedData = await getFollowed();
      const isFollowing = followedData.some(followedUser => followedUser.id === id);
      setUserFollow(isFollowing);
    };
    fetchData();
  }, [id]);

  const handleFollowClick = async () => {
    if (userFollow) {
      await unfollowUser(id);
      setFollowers(prev => (parseInt(prev) - 1).toString());
    } else {
      await follow(id);
      setFollowers(prev => (parseInt(prev) + 1).toString());
    }
    setUserFollow(!userFollow);
  };

  return (
    <div>
      <div className="h-fit bg-zinc-800 p-4 mb-4 rounded-sm text-white">
        <div className="best-picks flex flex-col items-start gap-2">
          <div>
            <div className="user-info flex flex-row items-center gap-1 rounded-full">
              <img
                src={pfp}
                alt="User"
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <p className="pl-1">{name}</p>●
              <button
                className={`${
                  userFollow ? "text-zinc-600" : "text-green-600 font-semibold"
                } p-2 rounded-md`}
                onClick={handleFollowClick}
              >
                {userFollow ? "unfollow" : "follow"}
              </button>
            </div>
            <div>{followers} followers</div>
          </div>
          <h1>{bio ? bio : ""}</h1>
        </div>
      </div>
    </div>
  );
}

export default SidePage;