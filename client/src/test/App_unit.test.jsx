// Contents of App.unit.test.jsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Login from '../components/Login';
import Register from '../pages/Register';
import QrCode from '../pages/QrCode';
import App from '../App'
import { describe, it, expect, vi } from 'vitest';
import formData from '../components/Login'

// describe('App Component', () => {
//   test('contains an h2 with "Login or Register"', () => {
//     render(
//       <MemoryRouter>
//         <QrCode />
//       </MemoryRouter>
//     );
    // const heading = screen.getByRole('heading', { name: /My/i });
    // expect(heading).toBeInTheDocument();

//   });

describe('QrCode component', () => {
  test('logs in with valid credentials and renders QrCode component', async () => {
    render(
      <Router >
        <App />
      </Router>
    );
    

    const usernameInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('password');
    const submitButton = screen.getByRole('button', { name: /Log in/i });

    userEvent.type(usernameInput, 'trivedi.jay2002@gmail.com');
    userEvent.type(passwordInput, 'ccnybustrack');

    await userEvent.click(submitButton);
    // await waitFor(() => {
    //   const homeText = screen.getByRole('heading', { name: /Please/i });
    //   expect(homeText).toBeInTheDocument();
    // });
    // screen.debug()


    // screen.debug()
    // const heading = screen.getByRole('heading', { name: /Please/i });
    // expect(heading).toBeInTheDocument();

    // // Wait for the QrCode component to render something specific
    // const qrCodeHeading = await screen.findByRole('heading', { name: /my profile/i });
    // expect(qrCodeHeading).toBeInTheDocument();
  });
});
