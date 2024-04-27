import { loadFont } from "@remotion/google-fonts/Lato";
const { fontFamily } = loadFont();

const NewsHeading = ({title, texture = "autumn"}) => {
  return (
    <div className={`pattern-${texture}-scale-50 bg-gradient-to-br from-gray-800 to-red-800 text-center pl-4 pr-4 border-b-yellow-400 border-b-8 border-t-8 border-t-orange-400`}>
      <h1 className="text-6xl p-4 text-white shadow-lg" style={{fontFamily}}>{title.toUpperCase()}</h1>
    </div>
  )
}

export default NewsHeading
