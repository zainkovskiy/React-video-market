import React, { useState } from 'react';

function Search (props){
  const {
    setListItem = Function.prototype,
  } = props;
  const [ type, setType ] = useState('all');
  const [ search, setSearch ] = useState('');

  const handlerKey = (event) => {
    if (event.key === 'Enter'){
      setListItem(search, type);
    }
  }
  const handlerRadioBtn = (event) => {
    setType(event.target.id);
    setListItem(search, event.target.id);
  }

    return <div className="row">
              <div className="input-field col s12">
                <input
                    type="search"
                    className="validate"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='search'
                    onKeyDown={handlerKey}
                />
                <button
                    className='btn search-btn grey lighten-1'
                    onClick={() => setListItem(search, type)}
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
                        checked={type === 'all'}
                        onChange={handlerRadioBtn}
                    />
                    all
                  </label>
                  <label htmlFor="movie" className='type__label'>
                    <input
                        className='type__input'
                        id='movie'
                        type="radio"
                        name='type'
                        checked={type === 'movie'}
                        onChange={handlerRadioBtn}
                    />
                    movies
                  </label>
                  <label htmlFor="series" className='type__label'>
                    <input
                        className='type__input'
                        id='series'
                        type="radio"
                        name='type'
                        checked={type === 'series'}
                        onChange={handlerRadioBtn}
                    />
                    serials
                  </label>
                </div>
            </div>
}

export default Search;