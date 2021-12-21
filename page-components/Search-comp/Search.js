import React, { useState } from "react";
import Styles from "../Search-comp/Search.module.scss";

function Search({ onSubmitSearch }) {
  const [State, setState] = useState({
    search: "",
  });
  const { search } = State;

  const submitSearch = (e) => {
    e.preventDefault();
    onSubmitSearch({ value: search });
  };

  console.log(search);
  return (
    <div className={Styles.container}>
      <form onSubmit={submitSearch}>
        <label className={Styles.label} htmlFor='Users'>
          search a User
        </label>
        <input
          placeholder='Search user...'
          className={Styles.input}
          type='text'
          name='Users'
          onChange={(e)=>setState({search:e.target.value})}
          value={search}
        />{" "}
        <br />
        <button className={Styles.button}> click</button>
      </form>
    </div>
  );
}

export default Search;
