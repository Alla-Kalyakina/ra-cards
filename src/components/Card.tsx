import {CardProps} from '../App'

const Card:React.FC<CardProps> = props => {
    return (
    <div className='card'>
        {props.image ? <img src={props.image} className="card-img-top" alt="..." /> : ''} 
        {props.children}    
    </div>
    )
}

export default Card