import Card from "./Card";

function List (props){
  const { list } = props;
  return <div className='cards'>
          {
            list.length > 0
            ? props.list.map(card => <Card key={card.imdbID} card={card}/> )
            : <p>Nothing found</p>
          }
        </div>
}

export default List;