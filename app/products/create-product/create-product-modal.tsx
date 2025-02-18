'use client';

import { Box, Button, Link, Modal, Stack, TextField } from '@mui/material';
import NextLink from 'next/link';
import { useState } from 'react';
import { FormResponse } from '@/app/common/interfaces/form-response.interface';
import createProduct from '@/app/products/actions/create-product';

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface CreateProductModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function CreateProductModal({ open, handleClose }: CreateProductModalProps) {
  const [response, setResponse] = useState<FormResponse>();

  const onClose = () => {
    setResponse(undefined);
    handleClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles}>
        <form className="w-full max-w-xs" action={async (formData) => {
          const response = await createProduct(formData);
          setResponse(response);
          if (!response.error) {
            onClose();
          }
        }}>
          <Stack spacing={2}>
            <TextField name="name" label="Name" type="text" variant="outlined" required helperText={response?.error}
                       error={!!response?.error} />
            <TextField name="description" label="Description" type="text" required variant="outlined"
                       helperText={response?.error}
                       error={!!response?.error} />
            <TextField name="price" label="Price" type="number" required variant="outlined" helperText={response?.error}
                       error={!!response?.error} />
            <Button variant="contained" color="primary" type="submit">Submit</Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
