import { useContext } from 'react';
import { PlayersContext } from '../context/playersContext';

const usePlayers = (): any => useContext(PlayersContext);

export default usePlayers;
