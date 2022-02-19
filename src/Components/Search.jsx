import React, { Component } from 'react';

class Search extends Component{
  state = {
    search: '',
    type: 'all',
  }
  handlerKey = (event) => {
    if (event.key === 'Enter'){
      this.props.setListItem(this.state.search, this.state.type);
    }
  }
  handlerRadioBtn = (event) => {
    this.setState(() => ({type: event.target.id}), () => {
      this.props.setListItem(this.state.search, this.state.type);
    });
  }
  render() {
    return <div className="row">
              <div className="input-field col s12">
                <input
                    type="search"
                    className="validate"
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    placeholder='search'
                    onKeyDown={this.handlerKey}
                />
                <button
                    className='btn search-btn grey lighten-1'
                    onClick={() => this.props.setListItem(this.state.search, this.state.type)}
                >
                    Search
                </button>
              </div>
                <div className="type">
                  <label htmlFor="all" className='type__label'>
                    <input
                        className='type__input'
                        id='all'
                        type="radio"
                        name='type'
                        checked={this.state.type === 'all'}
                        onChange={this.handlerRadioBtn}
                    />
                    all
                  </label>
                  <label htmlFor="movie" className='type__label'>
                    <input
                        className='type__input'
                        id='movie'
                        type="radio"
                        name='type'
                        checked={this.state.type === 'movie'}
                        onChange={this.handlerRadioBtn}
                    />
                    movies
                  </label>
                  <label htmlFor="series" className='type__label'>
                    <input
                        className='type__input'
                        id='series'
                        type="radio"
                        name='type'
                        checked={this.state.type === 'series'}
                        onChange={this.handlerRadioBtn}
                    />
                    serials
                  </label>
                </div>
            </div>
  }
}

export default Search;