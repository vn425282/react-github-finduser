import React, { useEffect } from 'react';
import { useStore } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactMarkdown from 'react-markdown/with-html';
import './readme.scss';

import { Button, DialogTitle, DialogContent, DialogActions, Dialog, useTheme } from '@material-ui/core';

function ReadMeDiaLog({ isOpen, handleDialogClose }) {
  const store = useStore();
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleClose = () => {
    setOpen(false);
    handleDialogClose();
  };

  return (
    <>
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"README.md"}</DialogTitle>
          <DialogContent>
              <div>
              <ReactMarkdown
                source={store.getState().readmeReducers[0]}
                escapeHtml={false}
              /></div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default ReadMeDiaLog;
