const INIT = 'react-plus-ssr-setup/app/INIT'

const initialState = {
  initialized: false,
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case INIT:
      return {
        initialized: true,
      }
    default:
      return state
  }
}

export const init = () => ({
  type: INIT,
})
