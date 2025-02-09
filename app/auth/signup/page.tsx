import {Button, Link, Stack, TextField} from "@mui/material";
import NextLink from "next/link";

export default function Signup() {
    return (
        <Stack spacing={2} className="w-full max-w-xs">
            <TextField label="Email" type="email" variant="outlined" />
            <TextField label="Password" type="password" variant="outlined" />
            <Button variant="contained" color="primary" type="submit">Login</Button>
            <Link component={NextLink} href={'/auth/login'} className={'self-center'}>Login</Link>
        </Stack>
    )
}