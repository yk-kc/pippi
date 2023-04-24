import React, { useState, useEffect } from 'react'
import styles from '@/styles/home.module.css'
import ReactLoading from 'react-loading'

export default function Home() {
  const [count, setCounter] = useState(0)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const onClickPlus = () => {
    setCounter(count + 1)
  }

  const onClickMinus = () => {
    setCounter(count - 1)
  }
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <ReactLoading
          type='spokes'
          color='rgb(96, 191, 255)'
          height='50px'
          width='50px'
          className='mx-auto'
        />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <p>{count}</p>
      <button onClick={onClickPlus} className={styles.button}>
        +1
      </button>
      <button onClick={onClickMinus} className={styles.button}>
        -1
      </button>
    </div>
  )
}
