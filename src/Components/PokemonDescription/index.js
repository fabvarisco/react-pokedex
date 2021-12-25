import { Modal, Typography } from "@mui/material";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { StyledBox } from "./style";

function PokemonDescription ({ name }, ref) {
  const [visible, setVisible] = useState(false);


  const handleControllPokemonDescription = useCallback(() => {
    setVisible(!visible);
  }, []);

  useImperativeHandle(ref, () =>{
    return{
      handleControllPokemonDescription
    }
  })

  return (
    <Modal
      open={false}
      onClose={() => {}}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </StyledBox>
    </Modal>
  );
}

