import  User  from "../Models/User";
export type UserContextType = {
    login: (email:string,password:string) => void;
    logout: () => void;
    isAuth: boolean;
    user: User | null;
};