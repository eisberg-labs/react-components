import React, { startTransition, useEffect, useState } from 'react';
import { setCookie, hasCookie } from 'cookies-next';

import SnackbarUnstyled from '@mui/base/SnackbarUnstyled';
import { CookieSerializeOptions } from 'cookie';

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
   * Cookie options, you can set expire here.
   */
  cookieOptions?: CookieSerializeOptions;
  /**
   * Optional function that triggers after cookie consent accepted.
   */
  onAccept?: () => void;
  /**
   * Set snackbarClassName
   * @default "fixed p-3 z-50 bottom-0"
   */
  snackBarClassName?: string;
  /**
   * Define styling of the cookie consent container.
   * @default "rounded-lg bg-white shadow-2xl p-3"
   */
  rootClassName?: string;
  /**
   * Define styling of the button.
   * @default 'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
   */
  buttonClassName?: string;
}

const defaultProps: CookieConsentProps = {
  rootClassName: 'rounded-lg bg-white shadow-2xl p-3',
  snackBarClassName: 'fixed p-3 z-50 bottom-0',
  buttonClassName:
    'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow',
  defaultName: 'CookieConsent',
  cookieOptions: undefined,
  confirmText: 'I understand',
};
export default function CookieConsent(props: React.PropsWithChildren<CookieConsentProps>) {
  const [visible, setVisible] = useState(false);
  const {
    defaultName,
    cookieOptions,
    confirmText,
    buttonClassName,
    rootClassName,
    children,
    snackBarClassName,
    onAccept,
  } = {
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
    <SnackbarUnstyled open={visible} onClose={handleAccept} className={snackBarClassName}>
      <div id={defaultName} className={rootClassName}>
        {children}&nbsp;
        <button aria-describedby={defaultName} className={buttonClassName} onClick={handleAccept}>
          {confirmText}
        </button>
      </div>
    </SnackbarUnstyled>
  );
}
