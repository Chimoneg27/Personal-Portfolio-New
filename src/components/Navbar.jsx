import { useState } from 'react';
import '../App.css';

const Navbar = () => {
  const [color, setColor] = useState('white');

  <>
    <nav className='w-80 p-3' style={{backgroundColor: {color}}}>
    <button onClick={setColor('black')}>black</button>
    <button onClick={setColor('white')}>white</button>
    </nav>
  </>
}

export default Navbar;