import React from 'react';
import css from './Profile.module.css'

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCard}>
      <div className={css.userInfo}>
        <img src={image} alt="User avatar" className={css.userAvatar}/>
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>
      <ul className={css.userStats}>
        <li className={css.statBox}>
          <span className={css.statTitle}>Followers</span>
          <span className={css.statCounter}>{stats.followers}</span>
        </li>
        <li className={css.statBox}>
          <span className={css.statTitle}>Views</span>
          <span className={css.statCounter}>{stats.views}</span>
        </li>
        <li className={css.statBox}>
          <span className={css.statTitle}>Likes</span>
          <span className={css.statCounter}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
