import { screen } from '@testing-library/react';
import { FiSend } from 'react-icons/fi';

import { renderWithTheme } from '@utils/tests/utils';

import Button from '.';

describe('<Button />', () => {
  it('should render the button', () => {
    const { container } = renderWithTheme(<Button title="Submit" />);

    const renderedButton = screen.getByRole('button', { name: /submit/i });

    expect(renderedButton).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the button with icon', () => {
    const { container } = renderWithTheme(
      <Button title="Submit" icon={<FiSend data-testid="icon-test" />} />,
    );

    const renderedButton = screen.getByRole('button', { name: /submit/i });
    const renderedIcon = screen.getByTestId('icon-test');

    expect(renderedButton).toBeInTheDocument();
    expect(renderedButton.childNodes).toHaveLength(2);

    expect(renderedIcon).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the button with only the icon', () => {
    const { container } = renderWithTheme(
      <Button icon={<FiSend data-testid="icon-test" />} />,
    );

    const renderedButton = screen.getByRole('button');
    const renderedIcon = screen.getByTestId('icon-test');

    expect(renderedButton).toBeInTheDocument();
    expect(renderedButton.childNodes).toHaveLength(1);

    expect(renderedIcon).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
