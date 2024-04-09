import { Link } from "react-router-dom"

const ImgBtn = ({src, href}) => {
  return (
    <Link to={href}>
        <img className="svg-btn" src={src} />
      </Link>
  )
}
export default ImgBtn