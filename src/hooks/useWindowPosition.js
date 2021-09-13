import { useLayoutEffect, useState } from 'react';

const useWindowPosition = (id) => {
  const [animation, setAnimation] = useState(false)
  useLayoutEffect(() => {
    const updatePosition = () => {
      const offsetHeight = window.document.getElementById(id).offsetHeight
      if (window.pageYOffset > offsetHeight * 0.7) {
        setAnimation(true)
      }
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    const result = () => window.removeEventListener('scroll', updatePosition)
    console.log(updatePosition())
    console.log(result)
    return result
  }, [id])
  return animation;
}

export default useWindowPosition