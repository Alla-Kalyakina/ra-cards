import Card from './components/Card'
import './App.css'
import CardBody from './components/CardBody';

export type CardProps = {
    image?: string;
    title?: string;
    text?: string;
    btnText?: string;
    children?: React.ReactNode 
  }

function App() {

  return (
    <>
      <Card image = '...'>
        <CardBody
          title = 'Card title'
          text = 'Some quick example text to build on the card title and make up the bulk of the content.'
          btnText = 'Go somewhere' />
      </Card>

      <CardBody
          title = 'Card title'
          text = 'Some quick example text to build on the card title and make up the bulk of the content.'
          btnText = 'Go somewhere' />
    </>
  )
}

export default App
