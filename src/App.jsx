import { useState } from 'react'
import './App.css'

function App() {
    const [sayi, setSayi] = useState(0);


    return(
    <>
        <h1> {sayi} </h1>
    <button onClick={() => setSayi(sayi + 1)}>Artır</button>
        <button onClick={() => setSayi(sayi - 1)} disabled={sayi===0} >Azalt</button>
            <button onClick={() => setSayi(0)}>Sıfırla</button>
        </>
    )
}  
export default App;
