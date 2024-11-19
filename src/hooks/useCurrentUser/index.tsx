import { User } from "@src/api";
import { useSelector } from "react-redux";
interface RootState {
  auth: {
    user: string;
  };
}

function useCurrentUser() {
  return JSON.parse(useSelector((state: RootState) => state.auth.user)) as User;
}

export default useCurrentUser;
