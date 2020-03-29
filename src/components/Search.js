import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContext";

export const Search = () => {
  const [value, setValue] = useState('');
  const {show} = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return;
    }

    if (value.trim()) {
      github.search(value.trim());
    } else {
      show('Enter some text!')
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter name of the user..."
        onKeyPress={onSubmit}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  )
};
