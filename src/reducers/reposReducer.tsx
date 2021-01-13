const SET_REPOS = 'SET_REPOS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const defaultState = {
  items: [],
  isFetching: true,
  currentPage: 1,
  perPage: 10,
  totalCount: 0,
};

interface ActionType {
  payload: {
    incomplete_results: boolean;
    items: [];
    total_count: string;
  };
  type: string;
}

export default function reposReducer(state = defaultState, action: ActionType) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        items: action.payload.items,
        totalCount: action.payload.total_count,
        isFetching: false,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
}

export const setRepos = (repos: string) => ({ type: SET_REPOS, payload: repos });
export const setIsFetching = (bool: boolean) => ({ type: SET_IS_FETCHING, payload: bool });
export const setCurrentPage = (page: number) => ({ type: SET_CURRENT_PAGE, payload: page });
