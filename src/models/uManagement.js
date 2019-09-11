import { queryUserAll, dbButton} from '@/services/uManagement';

export default {
  namespace: 'uManagement',
  state: {
    record: [],
  },
  effects: {
    *queryUserAll({payload}, { call, put }) {
      const response = yield call(queryUserAll,payload);
      yield put({
        type: 'show',
        payload:response
      });
    },
    *dbButton({payload}, { call, put }) {
      const response = yield call(dbButton,payload);
      yield put({
        type: 'show',
        payload:response
      });
    },
  },
  reducers: {
    show(state, action) {
      return {
        ...state,
        record: action.payload,
      };
    },
  },
};