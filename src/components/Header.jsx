import logo from '../assets/logo.jpg';

function Header() {
  return (
    <header id="main-header">
      <h1 id="title">My Blog</h1>
      <img src={logo} alt="Logo" /> 
        <nav>           
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
        </nav>
       
    </header>
  );
}
export default Header;