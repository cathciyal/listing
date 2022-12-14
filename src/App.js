import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  const planets = [
    'Mars',
    'Venus',
    'Jupiter',
    'Earth',
    'Saturn',
    'Neptune'
  ];

  const planet=planets.map(items=>
    <p>{items}</p>
    )
 
  return <>
    {
       <div style={{ display: 'block', width: 330, padding: 30 }}>
          <ListGroup >
      <ListGroup.Item>Mars</ListGroup.Item>
      <ListGroup.Item>Venus</ListGroup.Item>
      <ListGroup.Item>Jupiter</ListGroup.Item>
      <ListGroup.Item>Earth</ListGroup.Item>
      <ListGroup.Item>Saturn</ListGroup.Item>
      <ListGroup.Item>Neptune</ListGroup.Item>
    </ListGroup>
      </div>
            
    }
  </>;
}

export default App;