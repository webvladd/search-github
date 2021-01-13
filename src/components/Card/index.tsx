import React from 'react';
import s from './Card.module.scss';

import { ReactComponent as BookIconSvg } from './assets/BookIcon.svg';
import { ReactComponent as StarIconSvg } from './assets/StarIcon.svg';

interface CardProps {
  repo: ReposType;
}

interface ReposType {
  currentPage: number;
  isFetching: boolean;
  items: [];
  perPage: number;
  totalCount: number;
}

interface ItemType {
  id: number;
  html_url: string;
  full_name: string;
  archived: boolean;
  description: string;
  stargazers_count: number;
  language: string | null;
  license: {
    spdx_id: string;
  };
  pushed_at: string;
}

const Card: React.FC<CardProps> = ({ repo }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.overall_result}>
        <span>{repo.totalCount} repository results</span>
      </div>

      <ul className={s.result_list}>
        {repo.items.map((item: ItemType) => {
          return (
            <li key={item.id} className={s.result_list_item}>
              <div className={s.item_icon}>
                <BookIconSvg />
              </div>

              <div className={s.item}>
                <div className={s.item_link_repo}>
                  <a href={item.html_url} target="_blank">
                    {item.full_name}
                  </a>
                  {item.archived ? <span>Archived</span> : ''}
                </div>

                {item.description ? (
                  <div className={s.item_description}>
                    <span>{item.description}</span>
                  </div>
                ) : (
                  ''
                )}

                <div className={s.item_status_repo}>
                  <div className={s.item_star_repo}>
                    <StarIconSvg />
                    <span>{item.stargazers_count}</span>
                  </div>

                  <div className={s.item_language_repo}>
                    <span>{item.language}</span>
                  </div>

                  {item.license ? (
                    <div className={s.item_license_repo}>
                      <span>{item.license.spdx_id} license</span>
                    </div>
                  ) : (
                    ''
                  )}

                  <div className={s.item_last_updated}>
                    <span>last update {item.pushed_at}</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
