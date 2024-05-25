import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import * as S from "./style";
import { useAuthContext } from "../../../providers/auth-provider";

// tipagem
interface UserProfileProps {
   username: string;
   email: string;
}

export const UserProfile = ({ username, email }: UserProfileProps) => {
   const [tooltipVisible, setTooltipVisible] = useState(false);

   const { logout } = useAuthContext();

   const navigate = useNavigate();
   const tooltipRef = useRef<HTMLDivElement>(null);

   const handleIconClick = () => {
      setTooltipVisible(!tooltipVisible);
   };

   const handleLogout = async () => {
      setTimeout(async () => {
         await logout();
      }, 3000);
      navigate("/fazer-login");
      setTooltipVisible(false);
   };

   const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
         setTooltipVisible(false);
      }
   };

   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   // Made to grab initials of username.
   const getInitials = (name: string): string => {
      const names = name.split(" ");
      const initials = names.map((name) => name.charAt(0));
      return initials.join("").toUpperCase();
   };

   return (
      <S.ProfileContainer>
         <S.ProfilePicture>
            <S.Initials>{getInitials(username)}</S.Initials>
         </S.ProfilePicture>
         <S.Username onClick={handleIconClick}>{username}</S.Username>
         <IconContext.Provider value={{ color: "white", size: "20px" }}>
            <BiChevronDown />
         </IconContext.Provider>
         <S.DivForTooltip ref={tooltipRef}>
            {tooltipVisible && (
               <S.Tooltip>
                  <S.TooltipContentDiv>
                     <S.TooltipEmail>{email}</S.TooltipEmail>
                     <S.TooltipHr />
                     <S.TooltipSignOutButton onClick={handleLogout}>
                        Sair
                        <S.IconInButton>
                           <BiChevronRight />
                        </S.IconInButton>
                     </S.TooltipSignOutButton>
                  </S.TooltipContentDiv>
               </S.Tooltip>
            )}
         </S.DivForTooltip>
      </S.ProfileContainer>
   );
};
