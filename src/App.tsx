import Card from './components/Card'
import './App.css'
import CardBody from './components/CardBody';
import { Component } from 'react';

export type CardProps = {
    image?: string;
    title: string;
    text: string;
    btnText: string;
    //body?: Component 
  }

function App() {
  const cardBody = <CardBody
        title = 'Card title'
        text = 'Some quick example text to build on the card title and make up the bulk of the content.'
        btnText = 'Go somewhere'
      />
  return (
    <Card 
    image = '...'
    body = {cardBody}/>
  )
}

export default App