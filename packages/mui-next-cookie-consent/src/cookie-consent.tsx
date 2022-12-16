import React, { startTransition, useEffect, useState } from 'react';
import { setCookie, hasCookie } from 'cookies-next';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import { CookieSerializeOptions } from 'cookie';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

export interface CookieConsentProps {
  /**
   * Default cookie name for cookie consent
   */
  defaultName?: string;
  /**
   * Confirm button text
   */
  confirmText?: React.ReactNode;
  /**
   * Button variant. Default is text.
   */
  buttonVariant?: 'text' | 'outlined' | 'contained';

  /**
   * Cookie options, you can set expire here.
   */
  cookieOptions?: CookieSerializeOptions;
  /**
   * Optional function that triggers after cookie consent accepted.
   */
  onAccept?: () => void;
  /**
   * Define styling of the cookie consent container.
   */
  sx?: SxProps<Theme>;
  /**
   * Define styling of the button.
   */
  buttonSx?: SxProps<Theme>;
}

const defaultProps: CookieConsentProps = {
  sx: { background: 'white', p: 3 },
  buttonSx: {},
  defaultName: 'CookieConsent',
  cookieOptions: undefined,
  confirmText: 'I understand',
  buttonVariant: 'text',
};
export default function CookieConsent(props: React.PropsWithChildren<CookieConsentProps>) {
  const [visible, setVisible] = useState(false);
  const { defaultName, cookieOptions, confirmText, sx, buttonSx, children, buttonVariant, onAccept } = {
    ...defaultProps,
    ...props,
  };
  const cookieName: string = defaultName || 'CookieConsent';

  useEffect(() => {
    startTransition(() => {
      setVisible(!hasCookie(cookieName));
    });
  }, []);

  const handleAccept = () => {
    setCookie(cookieName, true, cookieOptions);
    setVisible(false);
    typeof onAccept === 'function' && onAccept();
  };

  if (!visible) {
    return <></>;
  }

  return (
    <Snackbar open={visible} onClose={handleAccept}>
      <Paper id={defaultName} sx={sx} elevation={3}>
        {children}&nbsp;
        <Button variant={buttonVariant} aria-describedby={defaultName} sx={buttonSx} onClick={handleAccept}>
          {confirmText}
        </Button>
      </Paper>
    </Snackbar>
  );
}
