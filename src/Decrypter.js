import React, { useState } from "react";
import CryptoJS from "crypto-js";

const Decrypter = () => {
  const [encrypted, setEncrypted] = useState("");
  const [iv, setIv] = useState("");
  const [key, setKey] = useState("");
  const [decryptedPassword, setDecryptedPassword] = useState("");

  const handleDecrypt = () => {
    const decrypted = CryptoJS.AES.decrypt(encrypted, CryptoJS.enc.Hex.parse(key), {
      iv: CryptoJS.enc.Hex.parse(iv),
    }).toString(CryptoJS.enc.Utf8);
    setDecryptedPassword(decrypted);
  };

  return (
    <div>
      <h2>Password Decrypter</h2>
      <input
        type="text"
        value={encrypted}
        onChange={(e) => setEncrypted(e.target.value)}
        placeholder="Enter encrypted password"
      />
      <input
        type="text"
        value={iv}
        onChange={(e) => setIv(e.target.value)}
        placeholder="Enter IV"
      />
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Enter Key"
      />
      <button onClick={handleDecrypt}>Decrypt</button>
      {decryptedPassword && (
        <div>
          <h3>Decrypted Password:</h3>
          <p>{decryptedPassword}</p>
        </div>
      )}
    </div>
  );
};

export default Decrypter;
