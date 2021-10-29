import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    price: props.price,
    category: props.category,
  });

  const handleEditValues = () => {
    Axios.put("http://localhost:3001/edit", {
      id: editValues.id,
      name: editValues.name,
      price: editValues.price,
      category: editValues.category,
    }).then((response) => {
      console.log(response);
    });
    handleClose();
  };

  const handleDelete = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`);
    handleClose();
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = (v) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [v.target.id]: v.target.value,
    }));
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
          defaultValue={props.name}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="Price"
          label="Price"
          defaultValue={props.price}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="Category"
          label="Category"
          defaultValue={props.category}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDelete} color="primary">
          Excluir
        </Button>
        <Button onClick={handleEditValues} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
