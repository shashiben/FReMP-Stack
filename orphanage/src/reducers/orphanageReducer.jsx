import {
  ORPHANAGE_LIST_REQUEST,
  ORPHANAGE_LIST_SUCCESS,
  ORPHANAGE_LIST_ERROR,
  ORPHANAGE_ADD_ERROR,
  ORPHANAGE_ADD_REQUEST,
  ORPHANAGE_ADD_SUCCESS,
  ORPHANAGE_UPDATE_ERROR,
  ORPHANAGE_UPDATE_REQUEST,
  ORPHANAGE_UPDATE_SUCCESS,
  ORPHANAGE_UPDATE_RESET,
  ORPHANAGE_DELETE_ERROR,
  ORPHANAGE_DELETE_REQUEST,
  ORPHANAGE_DELETE_SUCCESS,
  ORPHANAGE_DELETE_RESET,
  ORPHANAGE_DETAILS_REQUEST,
  ORPHANAGE_DETAILS_SUCCESS,
  ORPHANAGE_DETAILS_ERROR,
} from '../constants/orphanageConstant'

export const orphanageListReducer = (state = { orphanages: [] }, action) => {
  switch (action.type) {
    case ORPHANAGE_LIST_REQUEST:
      return { ...state, loading: true }
    case ORPHANAGE_LIST_SUCCESS:
      return { loading: false, orphanages: action.payload }
    case ORPHANAGE_LIST_ERROR:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const orphanageAddReducer = (state = { orphanage: {} }, action) => {
  switch (action.type) {
    case ORPHANAGE_ADD_REQUEST:
      return { ...state, loading: true }
    case ORPHANAGE_ADD_SUCCESS:
      return { loading: false, success: true }
    case ORPHANAGE_ADD_ERROR:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const orphanageDetailsReducer = (state = { orphanage: {} }, action) => {
  switch (action.type) {
    case ORPHANAGE_DETAILS_REQUEST:
      return { ...state, loading: true }
    case ORPHANAGE_DETAILS_SUCCESS:
      return { loading: false, orphanage: action.payload }
    case ORPHANAGE_DETAILS_ERROR:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const orphanageUpdateReducer = (state = { orphanage: {} }, action) => {
  switch (action.type) {
    case ORPHANAGE_UPDATE_REQUEST:
      return { ...state, loading: true }
    case ORPHANAGE_UPDATE_SUCCESS:
      return { loading: false, success: true }
    case ORPHANAGE_UPDATE_ERROR:
      return { loading: false, error: action.payload }
    case ORPHANAGE_UPDATE_RESET:
      return { orphanage: {} }

    default:
      return state
  }
}

export const orphanageDeleteReducer = (state = { orphanage: {} }, action) => {
  switch (action.type) {
    case ORPHANAGE_DELETE_REQUEST:
      return { ...state, loading: true }
    case ORPHANAGE_DELETE_SUCCESS:
      return { loading: false, success: true }
    case ORPHANAGE_DELETE_ERROR:
      return { loading: false, error: action.payload }
    case ORPHANAGE_DELETE_RESET:
      return {}

    default:
      return state
  }
}
