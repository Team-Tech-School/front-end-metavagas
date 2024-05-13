import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import * as S from "./style";

interface UserProfileProps {
   username: string;
}

export const UserProfile = ({ username }: UserProfileProps) => {
   const [tooltipVisible, setTooltipVisible] = useState(false);
   const navigate = useNavigate();

   const handleIconClick = () => {
      setTooltipVisible(!tooltipVisible);
   };

   const handleLogout = () => {
      navigate("/fazer-login");
      setTooltipVisible(false);
   };

   const getInitials = (name: string): string => {
      const names = name.split(" ");
      const initials = names.map((name) => name.charAt(0));
      return initials.join("").toUpperCase();
   };

   return (
      <S.ProfileContainer onClick={handleIconClick}>
         <S.ProfilePicture>
            <S.Initials>{getInitials(username)}</S.Initials>
         </S.ProfilePicture>
         <S.Username>{username}</S.Username>
         <div style={{ marginLeft: "6px", marginTop: "5px", position: "relative" }}>
            <IconContext.Provider value={{ color: "white", size: "20px" }}>
               <BiChevronDown />
            </IconContext.Provider>
            {tooltipVisible && (
               <S.Tooltip>
                  <div onClick={handleLogout}>
                     Sair <BiChevronRight />
                  </div>
               </S.Tooltip>
            )}
         </div>
      </S.ProfileContainer>
   );
};
