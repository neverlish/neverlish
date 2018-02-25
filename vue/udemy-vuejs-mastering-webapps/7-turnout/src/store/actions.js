import * as types from './mutation-types'

export const signIn = ({commit}, user_paylod) => {
  commit(types.SIGN_IN, user_paylod)
}

export const signOut = ({commit}) => {
  commit(types.SIGN_OUT)
}
