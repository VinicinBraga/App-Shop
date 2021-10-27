import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog(props) {
  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Editar</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Game Name"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="Price"
          label="Price"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="Category"
          label="Category"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Salvar
        </Button>
        <Button onClick={handleClose} color="primary">
          Excluir
        </Button>
      </DialogActions>
    </Dialog>
  );
}
