'use client';

import { Button, Link, Stack, TextField } from '@mui/material';
import NextLink from 'next/link';
import { useFormState } from 'react-dom';
import login from '@/app/auth/login/login';

export default function Login() {
  const [state, formAction] = useFormState(login, { error: '' });

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
        <TextField name="email" label="Email" type="email" variant="outlined" error={!!state?.error}
                   helperText={state?.error} />
        <TextField name="password" label="Password" type="password" variant="outlined" error={!!state?.error}
                   helperText={state?.error} />
        <Button variant="contained" color="primary" type="submit">Login</Button>
        <Link component={NextLink} href={'/auth/signup'} className={'self-center'}>Sign up</Link>
      </Stack>
    </form>
  );
}