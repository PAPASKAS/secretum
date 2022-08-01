import useSwr from 'swr';
import { Axios } from 'src/lib';
import { AxiosError } from 'axios';
import { Register } from 'src/interfaces';

interface Props {
  middleware?: 'guest' | 'auth' | 'verified' | 'none';
  redirectTo?: string;
}

export default function useAuth({ middleware = 'none', redirectTo = '/' }: Props) {
  const getCsrf = async () => Axios.get('/sanctum/csrf-cookie')
    .catch((err: AxiosError) => {
      alert(err.response?.status);
    });

  const { data: user, error } = useSwr('/api/user', () => {
    Axios
      .get('/api/user')
      .then((res) => res.data)
      .catch((err: AxiosError) => {
        if (err.response?.status !== 409) throw err;
      });
  });

  const register = async (props: Register) => {
    await getCsrf();

    Axios
      .post('/register', props)
      .then();
  };
}
