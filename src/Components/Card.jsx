function Card (props) {
  const { card } = props;
  return <div className='cards__item'>
          <img src={ card.Poster } alt={ card.Poster }/>
          <div className='cards__text'>
            <span className='cards__title'>{ card.Title }</span>
            <span>{ card.Type }</span>
            <span>{ card.Year }</span>
          </div>
        </div>
}

export default Card;