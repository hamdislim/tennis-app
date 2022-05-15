import { createContext } from 'react';
import IPlayer from '../helpers/playerInterface';

export interface StatesTypes {
    total: number;
    data: IPlayer[];
    initData: IPlayer[];
    setTotal: (total: number) => void;
    setData: (data: IPlayer[]) => void;
    setInitData: (data: IPlayer[]) => void;
}

const states: StatesTypes = {
    total: 0,
    data: [],
    initData: [],
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    setTotal: () => {},
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    setData: () => {},
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    setInitData: () => {},
};

export const PlayersContext = createContext<StatesTypes>(states);
