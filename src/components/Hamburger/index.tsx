import React from 'react'
import { useWindowSize, useLockedBody } from 'usehooks-ts'
import FxemojiHamburger from './FxemojiHamburger'
import Close from './Close'
import './index.css'

const Hamburger: React.FC = () => {
  const { width } = useWindowSize()
  const [locked, setLocked] = useLockedBody(false, 'root')

  return (
    <>
      <div className="hamburger-box" onClick={() => setLocked(!locked)}>
        {!locked ? <FxemojiHamburger className="hamburger" /> : <Close className="hamburger" />}
      </div>
      <div className="link-container" style={locked ? { opacity: 1, pointerEvents: 'all' } : undefined}>
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
