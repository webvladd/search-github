import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getRepos from '../../actions/repos';
import { setCurrentPage } from '../../reducers/reposReducer';
import createPages from '../../utils/pagesCreator';
import Card from '../../components/Card';
import Pagination from '../../components/pagination';

import s from './HomePage.module.scss';

interface ReposType {
  currentPage: number;
  isFetching: boolean;
  items: [];
  perPage: number;
  totalCount: number;
}

interface StateType {
  repos: ReposType;
}

const HomePage = () => {
  const dispatch = useDispatch();
  const repos: ReposType = useSelector((state: StateType) => state.repos);
  const isFetching: boolean = useSelector((state: StateType) => state.repos.isFetching);
  const [searchValue, setSearchValue] = useState('');
  const currentPage: number = useSelector((state: StateType) => state.repos.currentPage);
  const totalCount: number = useSelector((state: StateType) => state.repos.totalCount);
  const perPage: number = useSelector((state: StateType) => state.repos.perPage);
  const pagesCount: number = Math.ceil(totalCount / perPage);
  const pages: [] = [];

  createPages(pages, pagesCount, currentPage);

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage));
  }, [currentPage]);

  const handlerSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setCurrentPage(1));
    dispatch(getRepos(searchValue, currentPage, perPage));
  };

  return (
    <>
      <div className={s.wrapper}>
        <form className={s.search_form} onSubmit={handlerSearch}>
          <input type="text" placeholder="Search GitHub" onChange={(e) => setSearchValue(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </div>
      {isFetching === false ? <Card repo={repos} /> : <div className={s.loading}>Loading...</div>}
      <Pagination pages={pages} currentPage={currentPage} />
    </>
  );
};

export default HomePage;
