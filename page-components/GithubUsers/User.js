import React from "react";
import styles from "../../page-components/GithubUsers/User.module.scss";

function User({ user }) {
  const { id, login, avatar_url, followers_url } = user;

  return (
    <>
      <div className={styles.UserCart} key={id}>
        <img src={avatar_url} alt='image of user' />
        <h1>{login}</h1>
        <p>{followers_url}</p>
      </div>
    </>
  );
}

export default User;
