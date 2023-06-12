import { Button as ChakraButton } from '@chakra-ui/react'
import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { BtnProps, BtnStatusProps } from './types'

import styles from './button.module.css'

const Button = (props: BtnProps & ChakraButtonProps) => {
  const router = useRouter()
  const [btnStatus, setBtnStatus] = useState<BtnStatusProps>('idle')

  const handdleButtonClick = () => {
    setBtnStatus('loading')

    setTimeout(() => {
      setBtnStatus('success')
      router.push(props.link)
    }, 2000)
  }

  return (
    <ChakraButton
      onClick={() => handdleButtonClick()}
      className={styles.button}
    >
      {btnStatus === 'loading' && (
        <span className={styles.loading}>Loading...</span>
      )}
      {btnStatus === 'idle' && <span>{props.title}</span>}
      {btnStatus === 'success' && <span>Completed...</span>}
      {btnStatus === 'error' && <span>Something went wrong...</span>}
    </ChakraButton>
  )
}

export default Button
