import axios from 'axios';
import { setIsFetching, setRepos } from '../reducers/reposReducer';

const getRepos = (searchQuery: string, currentPage: number, perPage: number) => {
  const queryWord = searchQuery === '' ? 'stars:%3E1' : searchQuery;
  return async (dispatch: any) => {
    dispatch(setIsFetching(true));
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${queryWord}&sort=stars&per_page=${perPage}&page=${currentPage}`,
    );
    dispatch(setRepos(response.data));
  };
};

export default getRepos;
