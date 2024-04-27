import { loadFont } from "@remotion/google-fonts/Lato";
const { fontFamily } = loadFont();

const NewsSummary = ({summary}) => {
  return (
    <div>
      <h1 className="p-4 text-4xl bg-white text-gray-900 opacity-80" style={{fontFamily}}>{summary}</h1>
    </div>
  )
}

export default NewsSummary
