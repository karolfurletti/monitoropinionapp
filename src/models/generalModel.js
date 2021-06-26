export const generalModel = {
  state: {
    list: [],
    listComparation: [],
    listRelatorio: [],
    dataRelatorio: {}
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
    },

    setRelatorio: (state, list) => {
      return {
        ...state,
        listRelatorio: list
      }
    },

    setDataRel: (state, object) => {
      return {
        ...state,
        dataRelatorio: object
      }
    }
  },
  effects: dispatch => ({
      setListDados: list => {
        dispatch.generalModel.setList(list)
      },
      setListComparation: list => {
        dispatch.generalModel.setComparation(list)
      },

      setListRelatorio: list => {
        dispatch.generalModel.setRelatorio(list)
      },

      setDataRelatorio: object => {
        dispatch.generalModel.setDataRel(object)
      }
    }
  )
}
