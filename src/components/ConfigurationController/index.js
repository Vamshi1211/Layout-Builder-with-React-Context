import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const selectedContextValue = () => {
        onToggleShowContent()
      }

      const selectedLeftNavbarValue = () => {
        onToggleShowLeftNavbar()
      }
      const selectedRightNavbarValue = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controller-container">
          <h1 className="layout-heading">Layout</h1>
          <div className="input-container">
            <input
              type="checkbox"
              className="checkbox-element"
              id="contextId"
              onChange={selectedContextValue}
              checked={showContent}
            />
            <label className="label-element" htmlFor="contextId">
              Content
            </label>
          </div>

          <div className="input-container">
            <input
              type="checkbox"
              className="checkbox-element"
              id="leftId"
              onChange={selectedLeftNavbarValue}
              checked={showLeftNavbar}
            />
            <label className="label-element" htmlFor="leftId">
              Left Navbar
            </label>
          </div>

          <div className="input-container">
            <input
              type="checkbox"
              className="checkbox-element"
              id="rightId"
              onChange={selectedRightNavbarValue}
              checked={showRightNavbar}
            />
            <label className="label-element" htmlFor="rightId">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
