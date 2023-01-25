import {DefaultCopyField} from '@eisberg-labs/mui-copy-field';
import Box from '@mui/material/Box';

export default function BasicExample() {
  return(<Box sx={{p: 10}}><DefaultCopyField
    label="Click on copy Button"
    value={"Enter text"}/></Box>)
}
