import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Item from './item';

const mockedNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedNavigator,
}));
global.matchMedia =
    global.matchMedia ||
    function () {
        return {
            addListener: jest.fn(),
            removeListener: jest.fn(),
        };
    };

const item = {
    id: 52,
    firstname: 'Novak',
    lastname: 'Djokovic',
    shortname: 'N.DJO',
    sex: 'M' as string & { length: 1 },
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
};
test('renders item componenet', () => {
    render(<Item player={item} />);
    const nameElement = screen.getByText(/Novak Djokovic/i);
    expect(nameElement).toBeInTheDocument();
});

test('should redirect and update dom', () => {
    render(<Item player={item} />);

    userEvent.click(screen.getByTestId(/clickCard/));
    expect(mockedNavigator).toHaveBeenCalledTimes(1);
    expect(mockedNavigator).toHaveBeenCalledWith('/details/52');
});
