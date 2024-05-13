import { IconContext } from "react-icons";
import * as S from "./style";
import { BiChevronDown } from "react-icons/bi";

interface UserProfileProps {
   username: string;
}

export const UserProfile = ({ username }: UserProfileProps) => {
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
         <S.Username>{username}</S.Username>
         <div style={{ marginLeft: "6px", marginTop: "5px" }}>
            <IconContext.Provider value={{ color: "white", size: "20px" }}>{<BiChevronDown />}</IconContext.Provider>
         </div>
      </S.ProfileContainer>
   );
};
