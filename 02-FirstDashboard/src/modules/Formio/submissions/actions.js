import Formiojs from 'formiojs/Formio';
import * as types from './constants';
import { selectRoot } from '../root';

function reset (name) {
  return {
    type: types.SUBMISSIONS_RESET,
    name,
  };
}

function requestSubmissions (name, page, formId) {
  return {
    type: types.SUBMISSIONS_REQUEST,
    name,
    page,
    formId,
  };
}

function receiveSubmissions (name, submissions) {
  return {
    type: types.SUBMISSIONS_SUCCESS,
    submissions,
    name,
  };
}

function failSubmissions (name, err) {
  return {
    type: types.SUBMISSIONS_FAILURE,
    error: err,
    name,
  };
}

export const getSubmissions = (name, page = 0, params = {}, formId) => {
  return (dispatch, getState) => {
    dispatch(requestSubmissions(name, page, formId));
    const submissions = selectRoot(name, getState());

    // Ten is the default so if set to 10, don't send.
    // eslint-disable-next-line radix
    if (parseInt(submissions.limit) !== 10) {
      // eslint-disable-next-line radix
      params.limit = parseInt(submissions.limit);
    } else {
      // eslint-disable-next-line prefer-reflect
      delete params.limit;
    }

    if (page !== 1) {
      // eslint-disable-next-line radix
      params.skip = (parseInt(page) - 1) * parseInt(submissions.limit);
    } else {
      // eslint-disable-next-line prefer-reflect
      delete params.skip;
    }

    // Apply default query
    params = { ...params, ...submissions.query };

    const formio = new Formiojs(
      Formiojs.getProjectUrl() +
        '/' +
        (formId ? 'form/' + formId : name) +
        '/submission'
    );

    return formio
      .loadSubmissions({ params })
      .then(result => {
        dispatch(receiveSubmissions(name, result));
      })
      .catch(result => {
        dispatch(failSubmissions(name, result));
      });
  };
};

export const resetSubmissions = name => {
  return dispatch => dispatch(reset(name));
};
