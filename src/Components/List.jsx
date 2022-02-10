import Card from "./Card";

function List (props){
  return <div className='cards'>
          {
            props.list.map(card => <Card key={card.imdbID} card={card}/> )
          }
        </div>
}

export default List;