import React, { createContext } from "react";
import {UserContextType} from "../../types/UserContextType";

const UserContext =createContext<UserContextType>(null as any);
export default UserContext
//On cree un contexte pour les utilisateurs qui est de type UserContextType définit dans types/UserContextType.tsx