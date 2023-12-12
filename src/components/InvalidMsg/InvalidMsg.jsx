import React, { useRef } from "react";

export default function InvalidMsg() {
  const invalidMsgRef = useRef();

  function closeInvalidMsg() {
    invalidMsgRef.current.classList = `hide`;
  }

  return (
    <div className="" ref={invalidMsgRef}>
      <h1>ACCOUNT NOT FOUND</h1>
      <h2>Accounts you can try :</h2>
      <h3>Admin: hasan@gmail.com</h3>
      <h3>Password : admin</h3>
      <br />
      <h3>User: Diana.Rempel89@yahoo.com</h3>
      <h3>Password : diana</h3>
      <button onClick={closeInvalidMsg}>X</button>
    </div>
  );
}
