import {
  ORPHANAGE_LIST_REQUEST,
  ORPHANAGE_LIST_SUCCESS,
  ORPHANAGE_LIST_ERROR,
  ORPHANAGE_ADD_ERROR,
  ORPHANAGE_ADD_REQUEST,
  ORPHANAGE_ADD_SUCCESS,
  ORPHANAGE_DELETE_ERROR,
  ORPHANAGE_DELETE_REQUEST,
  ORPHANAGE_DELETE_SUCCESS,
  ORPHANAGE_UPDATE_ERROR,
  ORPHANAGE_UPDATE_REQUEST,
  ORPHANAGE_UPDATE_SUCCESS,
  ORPHANAGE_DETAILS_REQUEST,
  ORPHANAGE_DETAILS_SUCCESS,
  ORPHANAGE_DETAILS_ERROR,
} from '../constants/orphanageConstant'
import axios from 'axios'

export const listOrphanages = () => async (dispatch) => {
  try {
    dispatch({ type: ORPHANAGE_LIST_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.get(`/orphanagesList`, config)
    dispatch({
      type: ORPHANAGE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORPHANAGE_LIST_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const addOrphanage = (orphanage) => async (dispatch) => {
  try {
    dispatch({ type: ORPHANAGE_ADD_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(`/addOrphanage`, orphanage, config)

    dispatch({
      type: ORPHANAGE_ADD_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORPHANAGE_ADD_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getorphanageDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORPHANAGE_DETAILS_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.get(`/orphanage/${id}`, config)

    dispatch({
      type: ORPHANAGE_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORPHANAGE_DETAILS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateOrphanage = (orphanage) => async (dispatch) => {
  try {
    dispatch({ type: ORPHANAGE_UPDATE_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.put(
      `/editOrphanage/${orphanage._id}`,
      orphanage,
      config
    )

    dispatch({
      type: ORPHANAGE_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORPHANAGE_UPDATE_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteOrphanage = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORPHANAGE_DELETE_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.delete(`/orphanage/${id}`, config)

    dispatch({
      type: ORPHANAGE_DELETE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORPHANAGE_DELETE_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
