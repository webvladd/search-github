import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../reducers/reposReducer';

import s from './Pagination.module.scss';

interface PaginationPages {
  pages: [];
  currentPage: number;
}

const Pagination: React.FC<PaginationPages> = ({ pages, currentPage }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.pagination}>
      {pages.map((page: number) => {
        return (
          <button
            type="button"
            key={page}
            onClick={() => dispatch(setCurrentPage(page))}
            className={currentPage === page ? s.active_page : ''}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
