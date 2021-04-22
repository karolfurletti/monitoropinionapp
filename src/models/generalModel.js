export const generalModel = {
  state: {
    list: []
  },
  reducers: {
    setList: (state, list) => {
      return {
        ...state,
        list: list
      }
    }
  },
  effects: dispatch => ({
      setListDados: list => {
        dispatch.generalModel.setList(list)
      }
    }
  )
}
