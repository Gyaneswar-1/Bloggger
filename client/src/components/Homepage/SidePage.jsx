import React, { useEffect } from "react";
import { follow, getFollows } from "../../services/apiManage.service";

function SidePage({ pfp, name, bio, id }) {
  useEffect(() => {
    const fetchData = async () => {
      const data = await getFollows();
      const followedIds = data.map((item) => item.followed_id);
      // setFollowCount(followedIds.length);
      console.log(followedIds.length);
      console.log("Follow data:", data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="h-fit bg-zinc-200 p-4 mb-4 rounded-sm">
        <div className="best-picks flex flex-col items-start gap-2">
          <div className="user-info flex flex-row items-center gap-1 rounded-full">
            <img
              src={pfp}
              alt="User"
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <p className="pl-1">{name}</p>●
            <button
              className="text-green-600 p-2 rounded-md font-semibold"
              onClick={() => {
                follow(id);
              }}
            >
              Follow
            </button>
          </div>
          <h1>{bio ? bio : ""}</h1>
        </div>
      </div>
    </div>
  );
}

export default SidePage;
