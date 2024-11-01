import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Name from './Name';
import Description from './Description';
import Price from './Price';
import Image from './Image';
import produit from './produit';


const prenom = 'Aziz Azf';

console.log('Produit:', produit);
console.log('Prenom:', prenom);

function App() {
  return (
    <div className="App">
      <p>Bonjour, {prenom ? prenom : '!'}</p>
      {prenom && <img id='img1' src="https://www.w3schools.com/w3images/lights.jpg" alt="lights" style={{ width: '150px', height: '150px', }} />}
      
      <div className="card-group">
        <Card className='card1'>
          <Image imageUrl={produit.imageUrl} /> 
          <Card.Body>
            <Card.Title><Name name={produit.name} /></Card.Title>
            <Card.Text>
              <Description description={produit.description} />
              <Price prix={produit.price} />
            </Card.Text>
            <button className="btn btn-primary">Acheter</button>
          </Card.Body>
        </Card>

        <Card className='card2'>
          <Image imageUrl={produit.imageUrl} />
          <Card.Body>
            <Card.Title><Name name={produit.name} /></Card.Title>
            <Card.Text>
              <Description description={produit.description} />
              <Price prix={produit.price} />
            </Card.Text>
            <button className="btn btn-primary ">Acheter</button>

          </Card.Body>
        </Card>

        <Card className='card3'>
          <Image imageUrl={produit.imageUrl} />
          <Card.Body>
            <Card.Title><Name name={produit.name} /></Card.Title>
            <Card.Text>
              <Description description={produit.description} />
              <Price prix={produit.price} />
            </Card.Text>
            <button className="btn btn-primary">Acheter</button>

          </Card.Body>
        </Card>

        <Card className='card4'>
          <Image imageUrl={produit.imageUrl} />
          <Card.Body>
            <Card.Title><Name name={produit.name} /></Card.Title>
            <Card.Text>
              <Description description={produit.description} />
              <Price prix={produit.price} />
            </Card.Text>
            <button className="btn btn-primary">Acheter</button>

          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
