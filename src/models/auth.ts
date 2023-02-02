import { register, login } from '@/services/auth/api';

export default {
  state: {
    status: '777',
    // user: {},
  },

  effects: {
    // *registerEffects({ payload }, { call, put }) {
    //   console.log(payload);

    //   const res = yield call(register, payload);
    //   console.log(res);

    //   // console.log(data);
    //   // yield put({ type: 'registerSuccess', payload: res });
    // },

    *login({ payload }, { call, put }) {
      console.log('loginPayload', payload);
      const { data } = yield call(login, payload);
      console.log(data);
    },
  },

  reducers: {
    registerSuccess(state: any, { payload }: any) {
      return {
        ...state,
        status: payload,
      };
    },
  },

  test(state) {
    console.log('test');
    return state;
  },
};
