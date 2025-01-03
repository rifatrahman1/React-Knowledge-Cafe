import './App.css'
import Blog from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <div className='w-[1280px] mx-auto'>
      <Header></Header>
      <div className='flex'>
      <Blog></Blog>
      <BookMarks></BookMarks>
      </div>
    </div>
  )
}

export default App
