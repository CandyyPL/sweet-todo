import { ModalWrapper } from '@/components/Modal/Modal.styles'
import { FC } from 'react'

interface IModalProps {
  isOpen: boolean
  children: JSX.Element
}

ModalWrapper.setAppElement('#root')

const Modal: FC<IModalProps> = ({ isOpen, children }) => {
  return (
    <ModalWrapper isOpen={isOpen} style={{ overlay: { backgroundColor: '#444444dd', zIndex: 10 } }}>
      {children}
    </ModalWrapper>
  )
}

export default Modal
