import { useState } from "react";

export default function Navbar() {
  const [menuButtonClicked, setMenuButtonClicked] = useState(false);

  function ChangeMenuIcon() {
    setMenuButtonClicked(!menuButtonClicked);
  }

  return (
    <nav>
      <div className="inline-centering">
        <span className="logo-icon"></span>
        <span className="logo-text">React Blog App</span>
      </div>
      <div className={menuButtonClicked ? 'nav-links' : 'nav-links hidden'}>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
      <button className="menu-icon" onClick={ChangeMenuIcon}>
        <i className={menuButtonClicked ? 'fa fa-close' : 'fa fa-bars'}></i>
      </button>
    </nav>
  )
}