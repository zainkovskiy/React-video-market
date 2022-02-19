function Card (props) {
  const { card } = props;
  return <div className='cards__item'>
          <img src={ card.Poster === 'N/A'
              ? 'https://via.placeholder.com/300x430/?text=Poster'
              : card.Poster } alt={ card.Poster }/>
          <div>
            <div className='cards__text'>
              <span className='cards__title'>{ card.Title }</span>
              <span>{ card.Type }</span>
            </div>
            <span>{ card.Year }</span>
          </div>
        </div>
}

export default Card;