import React from 'react';
import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Copy from '@mui/icons-material/ContentCopy';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Tooltip from '@mui/material/Tooltip';

export enum CopyError {
  NotAvailable,
  WriteError,
}

interface Props {
  /**
   * Copy tooltip text
   */
  copyTooltip?: string;
  /**
   * Handler triggered on copy to clipboard success
   * @param {string} value
   */
  onCopySuccess?: (value: string) => void;
  /**
   * Handler triggered on copy to clipboard error
   * @param {CopyError} value copied value
   */
  onCopyError?: (error: CopyError) => void;
}

export type CopyFieldProps = Props & TextFieldProps;

const IconButtonWithTooltip = styled(IconButton)({
  root: {
    '&.Mui-disabled': {
      pointerEvents: 'auto',
    },
  },
});
const AlignedInputAdornment = styled(InputAdornment)({
  margin: '0 auto', // fix for vertically unaligned icon
});

export function CopyField({ onCopyError, onCopySuccess, copyTooltip = 'Copy', value, ...rest }: CopyFieldProps) {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const enabled = 'clipboard' in navigator;
    setDisabled(!enabled);

    if (!enabled) {
      typeof onCopyError == 'function' && onCopyError(CopyError.NotAvailable);
    }
  }, []);

  const copyText = () => {
    if ('clipboard' in navigator) {
      navigator.clipboard.writeText(value as string).then(
        () => {
          typeof onCopySuccess == 'function' && onCopySuccess(value as string);
        },
        () => {
          typeof onCopyError == 'function' && onCopyError(CopyError.WriteError);
        }
      );
    } else {
      typeof onCopyError == 'function' && onCopyError(CopyError.NotAvailable);
    }
  };

  return (
    <TextField
      type="text"
      value={value}
      InputProps={{
        endAdornment: (
          <AlignedInputAdornment position="end">
            {disabled ? (
              <IconButtonWithTooltip disabled={disabled} onClick={copyText}>
                <Copy />
              </IconButtonWithTooltip>
            ) : (
              <Tooltip title={copyTooltip}>
                <IconButtonWithTooltip role={'button'} disabled={disabled} onClick={copyText}>
                  <Copy />
                </IconButtonWithTooltip>
              </Tooltip>
            )}
          </AlignedInputAdornment>
        ),
      }}
      {...rest}
    />
  );
}

export function DefaultCopyField(props: TextFieldProps) {
  const [tooltip, setTooltip] = useState('Copy');
  const setCopied = () => setTooltip('Copied!');
  const setCopyError = () => setTooltip('Copy Error!');
  return <CopyField copyTooltip={tooltip} onCopySuccess={setCopied} onCopyError={setCopyError} {...props} />;
}
