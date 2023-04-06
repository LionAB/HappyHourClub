import React, { createContext } from 'react';
import { DrinkContestType } from '../../types/DrinkContestType';

const DrinkContext = createContext<DrinkContestType>(null as any);
export default DrinkContext;