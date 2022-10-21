import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  it('Header 테스트', () => {
    const { getByText } = render(<Header />);
    getByText('가게사장');
  });
});
