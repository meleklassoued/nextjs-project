import React from "react";
import Styles from "../Search-comp/Search.module.scss";

function Search() {
  return (
    <div className={Styles.container}>
      <form action='get'>
        <label className={Styles.label} htmlFor='Users'>
          search a User
        </label>
        <input className={Styles.input} type='text' name='Users' /> <br />
        <button className={Styles.button} type='submit'>
          {" "}
          click
        </button>
      </form>
    </div>
  );
}

export default Search;
