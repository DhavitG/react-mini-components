
import './App.css'
import ImageSlider from './Components/ImageSlider'
import RandomColor from './Components/RandomColor'
import StarRating from './Components/StarRating'

function App() { 

  return (
    <div>
      {/* Random Color Generator
      <RandomColor /> */}

      {/* Star Rating Component
      <StarRating numberOfStars={10}/> */}

      hello
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10}/>
    </div>
  )
}

export default App
