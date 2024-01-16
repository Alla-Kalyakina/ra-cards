import {CardProps} from '../App'

const CardBody = ({title, text, btnText}: CardProps) => {
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    <a href="#" className="btn btn-primary">{btnText}</a>
  </div>
}
export default CardBody