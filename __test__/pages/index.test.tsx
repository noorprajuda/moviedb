import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useFetchMovies } from '../../api/fetchHooks';
import Home from '../../pages/index';

jest.mock('../../api/fetchHooks', () => ({
    useFetchMovies: jest.fn(() => ({
      data: {
        pages: [
          {
            results: [
              {
                id: 1,
                poster_path: '/poster1.jpg',
                original_title: 'Movie 1',
                vote_average: 8.5,
              },
            ],
          },
        ],
      },
      fetchNextPage: jest.fn(),
      isLoading: false,
      isFetching: false,
      error: null,
    })),
  }));

describe('Home component', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders popular movies grid', () => {
    render(<Home />);
    expect(screen.getByText('Popular Movies')).toBeInTheDocument();
  });

  it('renders hero section when no search query is entered', () => {
    render(<Home />);
    const heroImageElement = screen.getByAltText('hero-image');
    expect(heroImageElement).toBeInTheDocument();
    expect(heroImageElement).toHaveAttribute('alt', 'hero-image');
  });

  it('updates the search query when typing in the header input field', () => {
    render(<Home />);
    const inputElement = screen.getByPlaceholderText('Search Movie');
    fireEvent.change(inputElement, { target: { value: 'Harry Potter' } });
    expect(inputElement).toHaveValue('Harry Potter');
  });
});
