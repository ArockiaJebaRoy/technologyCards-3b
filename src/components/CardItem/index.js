// Write your code here.
import './index.css'

const CardItem = props => {
  const {sourceObj} = props
  const {title, description, imgUrl, className} = sourceObj
  return (
    <li className={className}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <img className="card-img" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
