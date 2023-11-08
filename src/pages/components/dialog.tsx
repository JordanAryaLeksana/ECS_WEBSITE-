import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function DialogDefault({isOpen, nrp}:any) {
    const [open, setOpen] = React.useState(isOpen)
    const handleOpen = () => {
        setOpen(isOpen)
    }
    const handleClose = () => {
        setOpen(false)
    }
  function decimalToBinary(decimal:any) {
    if (decimal === 0) {
      return '0';
    }
  
    let binary = '';
    while (decimal > 0) {
      // Ambil sisa bagi dari pembagian oleh 2
      const remainder = decimal % 2;
      // Tambahkan sisa bagi ke awal string biner
      binary = remainder + binary;
      // Bagi bilangan desimal dengan 2 untuk iterasi berikutnya
      decimal = Math.floor(decimal / 2);
    }
  
    return binary;
  }
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          Terima kasih sudah mendaftar {decimalToBinary(nrp)}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}