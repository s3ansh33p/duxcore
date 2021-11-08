import { API_BASEURL, AUTH_TOKEN_KEY, INTENDED_PATH_KEY, isProd, REFRESH_EXCLUDE_LIST, REFRESH_TOKEN_KEY } from './util/constants';
import axiosInstance, { setAxiosHeader } from './lib/axiosInstance';
import { CreateWrapperOptions } from './types/options';
import { createUserController } from './lib/api/user';
import { useTokenStore } from './lib/useTokenStore';
import { isServer } from './util/isServer';

export const createWrapper = (options: CreateWrapperOptions) => {
  return {
    api: {
      user: createUserController(),
    },

    axios: {
      instance: axiosInstance,
      setHeader: setAxiosHeader
    },

    useTokenStore,
    isServer,

    constants: {
      API_BASEURL,

      isProd,
      REFRESH_EXCLUDE_LIST,

      AUTH_TOKEN_KEY,
      REFRESH_TOKEN_KEY,
      INTENDED_PATH_KEY
    }
  }
}