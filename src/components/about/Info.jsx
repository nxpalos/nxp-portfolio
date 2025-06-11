//
// Info Component
//

//Libraries
import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class='bx bx-award about__icon'></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">20+ Projects</span>
      </div>

      <div className="about__box">
        <i class='bx bxs-graduation about__icon'></i>
        <h3 className="about__title">B.S. in CS</h3>
        <span className="about__subtitle">GPA 3.67</span>
      </div>

      <div className="about__box">
        <i class='bx bx-message-alt-dots about__icon'></i>
        <h3 className="about__title">Let's Connect!</h3>
        {/* <span className="about__subtitle">Online 24/7</span> */}
      </div>
    </div>
  )
}

export default info