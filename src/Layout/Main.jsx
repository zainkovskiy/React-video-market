import React, { Component } from "react";

import List from '../Components/List';

class Main extends Component{
  state = {
    list: '',
  };
  render() {
    return (
        <main className='container content'>
          {
            this.state.list ? <List list={this.state.list}/> : 'loading'
          }
        </main>
    )
  }
  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=fcdad292&s=iron man').then(res => {
      res.json().then(data => {
        console.log(data)
        if (data.Response === "True"){
          this.setState({list: data.Search});
        }
      })
    })
  }
}

export default Main;