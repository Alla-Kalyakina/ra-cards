import {CardProps} from '../App'

const Card:React.FC<CardProps> = props => {
    return <div className='card'>
        <img src={props.image} className="card-img-top" alt="..." />      
        {props.body}
    </div>
}

export default Card