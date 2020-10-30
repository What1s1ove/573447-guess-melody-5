import axios, { AxiosResponse, AxiosError } from 'axios';
import { HttpCode } from '~/common/enums/enums';
import { BindingCb } from '~/common/types/types';

const BACKEND_URL = `https://5.react.pages.academy/guess-melody`;
const REQUEST_TIMEOUT = 5000;

const apiInstance = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
  withCredentials: true,
});

type CreateAPIParams = {
  onUnauthorized: BindingCb;
};

const createAPI = ({ onUnauthorized }: CreateAPIParams) => {
  const onSuccess = <T>(response: AxiosResponse<T>) => response;

  const onFail = <T>(err: AxiosError<T>) => {
    const { response } = err;

    switch (response?.status) {
      case HttpCode.UNAUTHORIZED: {
        onUnauthorized();

        throw err;
      }
    }

    throw err;
  };

  apiInstance.interceptors.response.use(onSuccess, onFail);

  return apiInstance;
};

export { createAPI };
