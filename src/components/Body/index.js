import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-container">
              <h1 className="left-navbar-heading">Left Navbar Menu</h1>
              <ul className="left-navbar-items-container">
                <li className="left-nav-bar-item">Item 1</li>
                <li className="left-nav-bar-item">Item 2</li>
                <li className="left-nav-bar-item">Item 3</li>
                <li className="left-nav-bar-item">Item 4</li>
              </ul>
            </div>
          )}

          {showContent && (
            <p className="content-container">
              <h1 className="left-navbar-heading">Content</h1>
              <p className="left-nav-bar-item"> Lorem ipsum</p>
            </p>
          )}

          {showRightNavbar && (
            <div className="right-navbar-container">
              <h1 className="right-navbar-heading">Right Navbar Menu</h1>
              <div className="ads-container">
                <div className="add-container">
                  <p>Ad 1</p>
                </div>
                <div className="add-container">
                  <p>Ad 2</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
