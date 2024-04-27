import { Img } from "remotion"

const NewsImage = ({image}) => {
  return (
    <div className="border-4 border-white">
      <Img alt="News Graphics" src={image} />
    </div>
  )
}

export default NewsImage
