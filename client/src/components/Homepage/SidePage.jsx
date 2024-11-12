import React, { useEffect, useState } from "react";
import {
  follow,
  getFollowersById,
  unfollowUser,
  getFollowers
} from "../../services/apiManage.service";

function SidePage({ pfp, name, bio, id }) {
  const [userfollow, setUserFollow] = useState(false);
  const [followers, setFollowers] = useState("0");
  useEffect(() => {
    const fetchData = async () => {
      const followersData = await getFollowersById(id);
      setFollowers(followersData.length);
      console.log("Followed: ",await getFollowers());
      if (getFollowers().id == id) {
        setUserFollow(true)
      }else{
        setUserFollow(false)
      }
      const followedData = await getFollowed();
      const isFollowing = followedData.some(followedUser => followedUser.id === id);
      setUserFollow(isFollowing);
    };
    fetchData();
  }, [id]);

  const handleFollowClick = async () => {
    if (userfollow) {
      await unfollowUser(id);
    } else {
      await follow(id);
    }
    setUserFollow(!userfollow);
  };

  return (
    <div>
      <div className="h-fit bg-zinc-800  text-white p-4 mb-4 rounded-sm">
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
                  userfollow ?  "text-zinc-600 ": "text-green-600 font-semibold"
                } p-2 rounded-md `}
                onClick={handleFollowClick}
              >
                {userfollow ? "unfollow" : "follow"}
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
