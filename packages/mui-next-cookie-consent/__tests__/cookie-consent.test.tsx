/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import * as React from 'react';
import CookieConsent from '../src';

test('should render', () => {
  const { container } = render(<CookieConsent>Cookie consent.</CookieConsent>);
  expect(container).toBeDefined();
});
