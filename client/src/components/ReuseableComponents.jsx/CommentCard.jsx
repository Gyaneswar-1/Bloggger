import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { getUserId } from "../../services/authService";
import { deletecomment } from "../../services/apiManage.service";
function CommentCard({ content, username, pfp, date, uid, bid, onDelete }) {
  const id = getUserId().id;
  const [showMenu, setShowMenu] = useState(false);

  const deleteHandle = async () => {
    if (showMenu) {
      const result = await deletecomment(bid, id);
    }
  };

  useEffect(() => {
    if (uid == id) {
      setShowMenu(true);
    }
  }, [uid, id]);

  return (
    <div className="bg-zinc-700 py-3 px-3 w-30 rounded-md">
      <div>
        <div className="flex items-center gap-2">
          <div className="rounded-full h-6 w-6 object-contain">
            <img
              src={pfp}
              className="rounded-full h-full w-full"
              alt="Placeholder"
            />
          </div>
          <div className="flex gap-2 text-[0.9rem]">
            <div className="flex gap-2 items-center">
              <h1>{username} |</h1>
              <p className="text-[0.7rem]">
                {formatDistanceToNow(new Date(date), {
                  addSuffix: true,
                }).replace("about ", "")}
              </p>
            </div>

            <div>
              {showMenu && (
                <Menu>
                  <MenuButton>
                    <i class="ri-more-2-line"></i>
                  </MenuButton>
                  <MenuList
                    bg="gray.800"
                    color="gray.200"
                    borderColor="gray.700"
                  >
                    <MenuItem className="flex gap-2" backgroundColor="black">
                      <i class="ri-edit-box-line"></i>
                      Edit
                    </MenuItem>
                    <MenuItem
                      className="flex gap-2"
                      backgroundColor="black"
                      onClick={() => {
                        deleteHandle();
                      }}
                    >
                      <i class="ri-delete-bin-6-line"></i>
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
              )}
            </div>
          </div>
        </div>
        <div className="text-[0.8rem] ml-8 ">{content}</div>
      </div>
    </div>
  );
}

export default CommentCard;
