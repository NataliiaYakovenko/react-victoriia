'use strict'

//JSX - спеціальний синтаксис (синтаксичний цукор) 

//Babel: jsx => js

const root = ReactDOM.createRoot(document.getElementById('root')) 
root.render(<App/>)

function App (){
    return <div titl='Hello!'>Hello React!</div>
}