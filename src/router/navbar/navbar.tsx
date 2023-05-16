
 import "./navbar.css"
const Navbar = () => {
  return (
    <div className="container">
        <div className="heading">
            <h1> CINNAMON</h1>
        </div>
        <div className='list-items'>
           
            <ul>
                <li>HOME</li>
                <li>SERVICE</li>
                <li>ABOUT US</li>
                <li>CAREER</li>
                <li>Blog</li>
            </ul>
          
        </div>
      <div>
        <button className="Contact-but"> Contact Us </button>
      </div>
    </div>
  )
}

export default Navbar
