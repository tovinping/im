import React, {useEffect, useCallback, useState} from 'react'

export default function Dialog() {
  const [visible, setVisible] = useState(true)
  const bodyClick = useCallback(() => {
    console.log('bodyClick*****************')
    setVisible(false)
  }, [])
  useEffect(() => {
    document.body.addEventListener('click', bodyClick)
    return () => {
      document.removeEventListener('click', bodyClick)
    }
  }, [bodyClick])
  function handleClick(e: React.MouseEvent) {
    e.nativeEvent.stopImmediatePropagation()
    console.log('tangwenping')
  }
  return <div>
    ---------------
    {visible ? <div onClick={handleClick}>aaaaaaaaaaa</div>: null}
  </div>
}