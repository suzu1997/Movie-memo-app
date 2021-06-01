import React, { memo, MouseEventHandler, VFC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type Props = {
  open: boolean;
  handleClose: MouseEventHandler<HTMLButtonElement>;
  onClickDelete: MouseEventHandler<HTMLButtonElement>;
};

export const DeleteConfirmDialog: VFC<Props> = memo((props) => {
  const { open, handleClose, onClickDelete } = props;

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id='form-dialog-title'>確認</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ⚠️本当にこの映画メモを削除しますか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color='primary'
            className='focus:outline-none'
          >
            キャンセル
          </Button>
          <Button
            onClick={onClickDelete}
            color='primary'
            className='focus:outline-none'
          >
            削除する
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
