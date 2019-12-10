import React from 'react'
import style from './BottomButtons.css'

const BottomButtons = props => {
  if (props.show) {
    return (
      <>
        <div className={style.bottomBtnsContainer}>
          <button className={style.btn} onClick={() => props.solve()}>
            See solve
          </button>
          <button className={style.btn} onClick={() => props.check()}>
            Check
          </button>
          <button className={style.btn} onClick={() => props.reset()}>
            Reset
          </button>
        </div>
        <div className={style.rights}>
          <p>All rights reserved</p>
          <p>Paweł Ż. 2019</p>
        </div>
      </>
    )
  } else {
    return ''
  }
}

export default BottomButtons
