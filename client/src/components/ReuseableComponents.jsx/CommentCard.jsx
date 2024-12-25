import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { getcomment } from "../../services/apiManage.service";
function CommentCard({content,username,pfp,date}) {


  return (
    <div className="bg-zinc-700 py-3 px-3 w-30 rounded-md">
      <div>
        <div className="flex items-center gap-2">
          <div className="rounded-full h-6 w-6 ">
            <img
              src={pfp}
              className="rounded-full"
              alt="Placeholder"
            />
          </div>
          <div className="flex gap-2 text-[0.9rem]">
            <div className="flex gap-2">
              <h1>{username}</h1>
              <p>{date}</p>
            </div>

            <div>
              <Menu>
                <MenuButton>
                  <i class="ri-more-2-line"></i>
                </MenuButton>
                <MenuList bg="gray.800" color="gray.200" borderColor="gray.700">
                  <MenuItem className="flex gap-2" backgroundColor="black">
                    <i class="ri-edit-box-line"></i>
                    Edit
                  </MenuItem>
                  <MenuItem className="flex gap-2" backgroundColor="black">
                    <i class="ri-delete-bin-6-line"></i>
                    Delete
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
        <div className="text-[0.8rem] ml-8 ">
          {content}
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
