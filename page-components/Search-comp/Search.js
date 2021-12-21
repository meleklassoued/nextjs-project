import React, { useState } from "react";
import Styles from "../Search-comp/Search.module.scss";

function Search() {
  const [State, setState] = useState({
    search: "malik",
  });
  const { search } = State;

  const handleForm = (e) => {
    setState({
      search: e.target.value,
    });
  };

  const SearchUser = (e) => {
    e.prevent.default();
    props.getUserSearch(search);
  };

  console.log(search);
  return (
    <div className={Styles.container}>
      <form onSubmit={SearchUser}>
        <label className={Styles.label} htmlFor='Users'>
          search a User
        </label>
        <input
          placeholder='Search user...'
          className={Styles.input}
          type='text'
          name='Users'
          onChange={handleForm}
          value={search}
        />{" "}
        <br />
        <button className={Styles.button}> click</button>
      </form>
    </div>
  );
}

export default Search;
