import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

const ChangeUser = () => {
  const { userName, changeUserName } = useContext(UserContext);
  const [inputValue, setInputValue] = useState('');
  console.log(userName);
  function handleUserName(e) {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    changeUserName(inputValue);
    setInputValue('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input value={inputValue} onChange={handleUserName} type="text" />
        <button type="submit">Change user</button>
      </form>
    </>
  );
};

export default ChangeUser;
