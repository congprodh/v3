import './App.css'
import BoardHeader from './BoardHeader'
import Header from './Header'
import PostForm from './PostForm'

function App() {

  return (
    <div className='bg-dark'>
      <Header />
      <BoardHeader />
      <PostForm />
      <div className="px-6 text-darkText">
        <div className="border border-reddit_border bg-dark-brighter p-2 rounded-md">
          <h5 className='text-darkText-darker mb-1 text-sm'>Posted by Thinh tu at 5 hours ago</h5>
          <h2 className='text-2xl mb-3'>Lorem ipsum</h2>
          <div className='text-sm leading-6'>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
