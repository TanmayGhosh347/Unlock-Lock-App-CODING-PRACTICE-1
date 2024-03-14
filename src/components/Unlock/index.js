import {useState} from 'react'

import {MainContainer, Image, Paragraph, Button} from './styledComponents'

const Unlock = () => {
  const [unlock, onUnlock] = useState(false)

  const onClickUnlockButton = () => {
    onUnlock(prevState => !prevState)
    console.log(unlock)
  }

  const buttonText = unlock === true ? 'Lock' : 'UnLock'
  const heading =
    unlock === true ? 'Your Device is Unlocked' : 'Your Device is Locked'
  return (
    <MainContainer>
      {unlock === true ? (
        <Image
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      ) : (
        <Image
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      )}

      <Paragraph>{heading}</Paragraph>
      <Button type="button" onClick={onClickUnlockButton}>
        {buttonText}
      </Button>
    </MainContainer>
  )
}

export default Unlock
