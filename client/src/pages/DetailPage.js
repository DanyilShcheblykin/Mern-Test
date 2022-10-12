import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LinkCard from "../components/LinkCard";
import Loader from "../components/Loader";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";

const DetailPage = () => {
  const { token } = useContext(AuthContext);
  const [link, setLink] = useState(null);
  const { request, loading } = useHttp();

  const linkId = useParams().id;

  const getLink = useCallback(async () => {
    try {
     const fetched =  await request(`/api/link/${linkId}`, "GET", null, {
        authorization: ` Bearer ${token} `,
      });
      setLink(fetched)
    } catch (error) {}
  }, [token, linkId, request]);

  useEffect(()=>{
    getLink()
  } , [getLink])

  console.log("lin 2002" , link)

  if(loading){
    return <Loader></Loader>
  }else{
    return (
        <div>
          {!loading && link && <LinkCard link={link}></LinkCard>}
        </div>
      );
  }


};

export default DetailPage;
