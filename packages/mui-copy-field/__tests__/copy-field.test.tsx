/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect';
import { CopyField, DefaultCopyField } from '../src';
import { render } from '@testing-library/react';
import * as React from 'react';

test('should render', () => {
  const { container } = render(<CopyField value={'Copy text'} label={'Click on clipboard'} />);
  expect(container).toBeDefined();
});

test('should render default', () => {
  const { container } = render(<DefaultCopyField value={'Copy text'} label={'Click on clipboard'} />);
  expect(container).toBeDefined();
});
