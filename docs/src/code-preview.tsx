import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CodeIcon from '@mui/icons-material/Code';
import PreviewIcon from '@mui/icons-material/Preview';
import {useEffect, useRef} from 'react';
import hljs from 'highlight.js';
import {Paper} from '@mui/material';


export default function CodePreview({code, children, iframe}: React.PropsWithChildren<{ code: string, iframe: string }>) {
  const [value, setValue] = React.useState(0);
  const codeElem = useRef();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (value == 1) {
      hljs.initHighlightingOnLoad();
      hljs.highlightBlock(codeElem.current);
    }
  }, [value])


  return (
    <Paper elevation={3}>
      <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
        <Tab icon={<PreviewIcon/>} aria-label="preview"/>
        <Tab icon={<CodeIcon/>} aria-label="code"/>
      </Tabs>
        {
          (value == 0) && <iframe style={{height: '500px', overflow: 'auto'}} src={iframe}>{
            children
          }</iframe>
        }
        {
      (value == 1) && <pre className={"language-typescript hljs"}
                            style={{height: '500px', overflow: 'auto', margin: 0, padding: 10}}
                            ref={codeElem}>{code}</pre>
    }
    </Paper>
  )
}
