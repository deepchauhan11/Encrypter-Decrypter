import React, { useState } from "react";
import CryptoJS from "crypto-js";

const Encrypter = () => {
  const [password, setPassword] = useState("");
  const [encrypted, setEncrypted] = useState("");
  const [iv, setIv] = useState("");
  const [key, setKey] = useState("");

  const handleEncrypt = () => {
    const key = CryptoJS.lib.WordArray.random(16);
    const iv = CryptoJS.lib.WordArray.random(16);

    const encrypted = CryptoJS.AES.encrypt(password, key, { iv }).toString();

    setEncrypted(encrypted);
    setIv(iv.toString());
    setKey(key.toString());
  };

  return (
    <div>
      <h2>Password Encrypter</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={handleEncrypt}>Encrypt</button>
      {encrypted && (
        <div>
          <h3>Encrypted Message:</h3>
          <p>{encrypted}</p>
          <h3>IV:</h3>
          <p>{iv}</p>
          <h3>Key:</h3>
          <p>{key}</p>
        </div>
      )}
    </div>
  );
};

export default Encrypter;
