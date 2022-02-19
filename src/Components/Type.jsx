import React, { Component } from 'react';

function Type (props){
  const { typeInput, setType } = props;
  return <div className="type">
          <label htmlFor="all" className='type__label'>
            <input
                className='type__input'
                id='all'
                type="radio"
                name='type'
                checked={ typeInput === 'all' && true }
                onChange={(e) => setType(e.target.id)}
            />
            all
          </label>
          <label htmlFor="movie" className='type__label'>
            <input
                className='type__input'
                id='movie'
                type="radio"
                name='type'
                checked={ typeInput === 'movie' && true }
                onChange={(e) => setType(e.target.id)}
            />
            movies
          </label>
          <label htmlFor="series" className='type__label'>
            <input
                className='type__input'
                id='series'
                type="radio"
                name='type'
                checked={ typeInput === 'series' && true }
                onChange={(e) => setType(e.target.id)}
            />
            serials
          </label>
        </div>

}

export default Type;