import { getUsers } from '~/api-client';

export function useUsers() {
  const { data, pending, error, refresh } = useAsyncData('users', async () => {
    const users = await getUsers({});
    return users.data;
  });

  return { data, pending, error, refresh };
}
