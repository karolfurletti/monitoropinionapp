export const generalModel = {
  state: {
    list: [],
    listComparation:[]
  },
  reducers: {
    setList: (state, list) => {
      return {
        ...state,
        list: list
      }
    },

    setComparation: (state, list) => {
      return {
        ...state,
        listComparation: list
      }
    }
  },
  effects: dispatch => ({
      setListDados: list => {
        dispatch.generalModel.setList(list)
      },
      setListComparation: list => {
        dispatch.generalModel.setComparation(list)
      }
    }
  )
}
