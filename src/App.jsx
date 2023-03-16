import {Header} from './components/header'
import {Post} from './components/Post'
import {Sidebar} from './components/sidebar'

import style from './App.module.css'

import './global.css';

  function App() {
    return (
      <div>
        <Header />

        <div className={style.wrapper}>
          <Sidebar />

          <main>
            <Post 
              author= 'Gabriel'
              content= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat velit et deleniti eveniet minus fuga. Temporibus maxime quod minima quae perferendis harum sint vero aspernatur et exercitationem? Dignissimos, non distinctio.' />

            <Post
              author= 'Jesus'
              content= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat velit et deleniti eveniet minus fuga. Temporibus maxime quod minima quae perferendis harum sint vero aspernatur et exercitationem? Dignissimos, non distinctio.' />
          </main>
        </div>
      </div>
        
    )
  }

export default App
