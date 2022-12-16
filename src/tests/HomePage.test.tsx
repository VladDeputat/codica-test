import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import HomePage from '../pages/HomePage';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('test fot HomePage', () => {
  render(
    <Provider store={store}>
      <HomePage />
    </Provider>,
  );
  it('HomePage - happy path', async () => {
    expect(
      screen.getByText("You haven't added any city yet"),
    ).toBeInTheDocument();

    const textField = screen.getByTestId('homeInput');
    expect(textField).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), 'London');
    debugger;
    expect(screen.getByRole('textbox')).toHaveValue('London');

    userEvent.click(screen.getByTestId('homeInputButton'));

    await waitFor(() => {
      const cityCard = screen.getByTestId('cityCard');
      expect(cityCard).toBeInTheDocument();
    });
    const cardCityName = screen.getByTestId('cardCityName');
    expect(cardCityName).toHaveTextContent('London');

    const links: HTMLAnchorElement[] = screen.getAllByRole('link');
    expect(links).toHaveLength(1);

    const cardContent = screen.getByTestId('cardContent');
    expect(cardContent).toBeInTheDocument();

    userEvent.click(screen.getByTestId('deleteButton'));

    await waitFor(() => {
      const cityCard = screen.queryByTestId('cityCard');
      expect(cityCard).not.toBeInTheDocument();
    });
  });
});
