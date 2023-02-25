import React, { useState, useEffect } from 'react'
import { useWindowSize } from 'usehooks-ts'
import FxemojiHamburger from './FxemojiHamburger'
import Close from './Close'
import './index.css'

const Hamburger: React.FC = () => {
  const { width } = useWindowSize()

  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (width > 790) {
      setOpen(false)
      document.body.style.overflow = 'unset'
    }
  }, [width])

  const handleClickHamburger = () => {
    setOpen(!open)
    // disable scroll when open link box
    if (!open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  return (
    <>
      <div className="hamburger-box" onClick={handleClickHamburger}>
        {!open ? <FxemojiHamburger className="hamburger" /> : <Close className="hamburger" />}
      </div>
      <div className="link-container" style={open ? { opacity: 1, pointerEvents: 'all' } : undefined}>
        <a href="/">
          首页<em>/</em>HOME
        </a>
        <a href="/weekly">
          周记<em>/</em>WEEK
        </a>
        <a href="/tags">
          标签<em>/</em>TAGS
        </a>
      </div>
    </>
  )
}

export default Hamburger
