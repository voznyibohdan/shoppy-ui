'use server';

import { API_URL } from '@/app/constants/api';
import { redirect } from 'next/navigation';
import { getErrorMessage } from '@/app/util/errors';

export default async function createUser(_prevState: any, formData: FormData) {
  console.log(formData);

  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    return { error: getErrorMessage(data) };
  }

  redirect('/');
}
