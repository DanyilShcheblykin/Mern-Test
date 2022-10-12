import React, { useContext, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";


const CreatePage = () => {
  const [link, setLink] = useState(" ");

  const auth = useContext(AuthContext);

  const { request } = useHttp();

  const pressHandler = async (event) => {
    if (event.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          { from: link },
          { authorization: `Bearer ${auth.token}` }
        );
        
       
        window.location.href =`/detail/${data.link._id}`      
      } catch (error) {}
    }
  };

  return (
    <div>
      <div className="input-field">
        <input
          onChange={(e) => setLink(e.target.value)}
          onKeyPress={pressHandler}
          type="text"
          placeholder="Вставьте ссылку"
          id="link"
          value={link}
        />
        <label htmlFor="link">Введите ссылку</label>
        {/* <button onClick={pressHandler}>YES</button> */}
      </div>
    </div>
  );
};

export default CreatePage;
