import React, { useState, useEffect } from "react";

import List from '../Components/List';
import Preloader from "../Components/Preloader";
import Search from "../Components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main (){
  const [ loading, setloading ] = useState(true);
  const [ list, setlist ] = useState([]);

  const setListItem = (value, type = 'all') => {
    setloading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${type !== 'all' ? `&type=${type}` : ''}`).then(res => {
      res.json().then(data => {
        if (data.Response === "True"){
          setlist(data.Search);
          setloading(false);
          console.log(data.Search)
        } else {
          setlist([]);
          setloading(false);
        }
      })
    }).catch(err => {
      console.log(err);
      setloading(false);
    })
  }

  useEffect(() => {
    setListItem('iron man', 'all');
  }, []);

  return (
      <main className='container content'>
        <Search setListItem={setListItem}/>
        {
          loading ? <Preloader/> : <List list={list}/>
        }
      </main>
  )
}

export default Main;