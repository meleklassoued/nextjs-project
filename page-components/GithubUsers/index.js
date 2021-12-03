import React from "react";
import styles from "../../page-components/GithubUsers/User.module.scss";
import Image from "next/image";

function index({ data }) {
  return (
    <div className={styles.container}>
      {data.map(({ id, login, avatar_url, followers_url }) => (
        <div className={styles.UserCart} key={id}>
          <img src={avatar_url} alt='image of user' />
          <h1>{login}</h1>
          <p>{followers_url}</p>
        </div>
      ))}
    </div>
  );
}

export default index;
