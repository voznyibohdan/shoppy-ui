'use client';

import { Button, Link, Stack, TextField } from '@mui/material';
import NextLink from 'next/link';
import { useFormState } from 'react-dom';
import createUser from '@/app/auth/signup/create-user';

export default function Signup() {
  const [state, formAction] = useFormState(createUser, { error: '' });

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
        <TextField name="email" label="Email" type="email" variant="outlined" helperText={state?.error}
                   error={!!state?.error} />
        <TextField name="password" label="Password" type="password" variant="outlined" helperText={state?.error}
                   error={!!state?.error} />
        <Button variant="contained" color="primary" type="submit">Login</Button>
        <Link component={NextLink} href={'/auth/login'} className={'self-center'}>Login</Link>
      </Stack>
    </form>
  );
}
