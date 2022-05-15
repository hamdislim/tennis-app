import { renderHook, act, waitFor } from '@testing-library/react';
import axios from 'axios';
import useGetPlayer from './useGetPlayer';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedNavigator,
}));

function sleep(ms): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const useApiFetchMock = {
    data: {
        data: {
            id: 52,
            firstname: 'Novak',
            lastname: 'Djokovic',
            shortname: 'N.DJO',
            sex: 'M',
            country: {
                picture:
                    'https://data.latelier.co/training/tennis_stats/resources/Serbie.png',
                code: 'SRB',
            },
            picture:
                'https://data.latelier.co/training/tennis_stats/resources/Djokovic.png',
            data: {
                rank: 2,
                points: 2542,
                weight: 80000,
                height: 188,
                age: 31,
                last: [1, 1, 1, 1, 1],
            },
        },
    },
};

describe('useGetPlayer Hook', () => {
    it('initial and success state', async () => {
        mockedAxios.get.mockResolvedValueOnce(useApiFetchMock);
        const { result } = renderHook(() => useGetPlayer('33'));
        expect(result.current).toMatchObject({
            player: undefined,
            loading: true,
        });
        expect(mockedAxios.get).toHaveBeenCalled();
        await act(() => sleep(2000));
        await waitFor(() => result.current.loading === false);
        console.info('result', result.current.player);
        expect(result.current).toMatchObject({
            player: useApiFetchMock.data.data,
            loading: false,
        });
    });
    it('error state', async () => {
        mockedAxios.get.mockRejectedValueOnce({});
        const { result } = renderHook(() => useGetPlayer('gg'));
        await act(() => sleep(2000));
        expect(result.current).toMatchObject({
            player: undefined,
            loading: false,
        });
    });
});
