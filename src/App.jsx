import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <div className='w-[1280px] mx-auto'>
      <Header></Header>
      <div className='flex justify-between mt-8'>
        <Blogs></Blogs>
      <BookMarks></BookMarks>
      </div>
    </div>
  )
}

export default App
