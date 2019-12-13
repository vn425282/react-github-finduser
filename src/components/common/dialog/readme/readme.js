import React, { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import './readme.scss';

import { Button, DialogTitle, DialogContent, DialogContentText, DialogActions, Dialog, useTheme } from '@material-ui/core';

function ReadMeDiaLog ({isOpen, handleDialogClose}) {
  const [open, setOpen] = React.useState(false);
  useEffect(() => { console.log('ggg', isOpen); setOpen(isOpen);  }, [isOpen]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const MOCK_DATA = "Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it."
  const handleClose = () => {
    setOpen(false);
    handleDialogClose();
  };

  function handleEditorChange ({html, text}) {
    console.log('handleEditorChange', html, text)
  }

  return (
    <>
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
            <MdEditor
              value={MOCK_DATA}
              renderHTML={(text) => text}
              onChange={handleEditorChange}
            />
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Disagree
          </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Agree
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default ReadMeDiaLog;
