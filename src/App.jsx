import { useState } from 'react'

function App() {
  let [isHomePage, setterF] = useState(true)
  let [pageName, setPageName] = useState('Home');

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>

        {isHomePage ? <div>Home page</div> : <div>Landing page</div>}

        <button onClick={()=> setterF(!isHomePage)}>click</button>
      </div>
      <hr/>
      <button onClick={()=> setPageName('Home')}>Home</button>
      <button onClick={()=> setPageName('About')}>About</button>
      <button onClick={()=> setPageName('Landing')}>Landing</button>

      {pageName === 'Home' && <div>Text is here</div>}
      {pageName === 'About' && <div><h1>Text is here</h1></div>}
      {pageName === 'Landing' && <div><input type="text" placeholder='write here' /></div>}
    </div>
  );
}

export default App;
