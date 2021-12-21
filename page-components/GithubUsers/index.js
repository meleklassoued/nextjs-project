import React, { useState } from "react";
import User from "../GithubUsers/User";
import SearchUsers from "../Search-comp/Search";
import styles from "../../page-components/GithubUsers/User.module.scss";
import axios from "axios";

function Index({ data }) {
  const [state, setState] = useState({
    search: "",
    loading: true,
    users: data,
  });
  const SearchUsersFromGit = (value) => {
    if (value != "") {
      axios
        .get(`https://api.github.com/search/users?q=${value}`)
        .then((res) =>
          setState({ users: res.data.items }, console.log(state.users)),
        )
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      <SearchUsers onSubmitSearch={(e) => SearchUsersFromGit(e.value)} />
      <div className={styles.container}>
        {state.users.map((user) => (
          // eslint-disable-next-line react/jsx-key
          <div key={state.users.id}>
            <User user={user} />
          </div>
        ))}
      </div>
    </>
  );
}
export default Index;
