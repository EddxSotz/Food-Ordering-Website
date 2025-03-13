import logo from '../assets/logo.jpg';

function Header() {
  return (
    <header id="main-header">
      <h1 id="title">Food Order</h1>
      <img src={logo} alt="Logo" id='header-img'/> 
      <nav id="navbar">           
          <ul id="nav-list">
            <li className='nav-item'><a href="#">Home</a></li>
            <li className='nav-item'><a href="#">About</a></li>
            <li className='nav-item'><a href="#">Contact</a></li>
          </ul>
          <button>Cart</button>
      </nav>      
    </header>
  );
}
export default Header;