export const loginModel = {
  state: {
    user: {}
  },
  reducers: {
    setUser: (state, user) => {
      return {
        ...state,
        user: user
      }
    }
  },
  effects: dispatch => ({
      setDadosUser: user => {
        dispatch.loginModel.setUser(user)
      }
    }
  )
}
