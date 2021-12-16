import React from "react";
import User from "../GithubUsers/User";
import styles from "../../page-components/GithubUsers/User.module.scss";

function Index({ data }) {
  return (
    <div className={styles.container}>
      {data.map((user) => (
        // eslint-disable-next-line react/jsx-key
        <User user={user} />
      ))}
    </div>
  );
}

export default Index;
