// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import AddAds from './component/addADS';
import Item from 'antd/lib/list/Item';
import PhoneLogin from './component/loginPhone/PhoneLogin';


it('renders welcome message', () => {
    render(<AddAds />);
    expect(screen.getByText('remov')).toBeInTheDocument();
  })

  
it('renders welcome message', () => {
    render(<Item />);
    expect(screen.getByText('delet')).toBeInTheDocument();
  })

  it('renders welcome message', () => {
    render(<PhoneLogin />);
    expect(screen.getByText('phone number ')).toBeInTheDocument();
  })