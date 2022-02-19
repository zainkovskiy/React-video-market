import React, { Component } from "react";

import List from '../Components/List';
import Preloader from "../Components/Preloader";
import Search from "../Components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component{
  state = {
    list: [],
    loading: true,
  };
  setListItem = (value, type = 'all') => {
    this.setState({loading: true});
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${type !== 'all' ? `&type=${type}` : ''}`).then(res => {
      res.json().then(data => {
        if (data.Response === "True"){
          this.setState({list: data.Search, loading: false});
          console.log(data.Search)
        } else {
          this.setState({list: [], loading: false});
        }
      })
    }).catch(err => {
      console.log(err);
      this.setState({loading: false});
    })
  }
  render() {
    const { list ,loading } = this.state;
    return (
        <main className='container content'>
          <Search setListItem={this.setListItem}/>
          {
            loading ? <Preloader/> : <List list={list}/>
          }
        </main>
    )
  }
  componentDidMount() {
    this.setListItem('iron man', 'all');
  }
}

export default Main;