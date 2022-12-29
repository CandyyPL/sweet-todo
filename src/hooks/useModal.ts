import { useState } from 'react'

const useModal = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleOpenModal = () => setOpen(true)
  const handleCloseModal = () => setOpen(false)

  return { isOpen, handleOpenModal, handleCloseModal }
}

export default useModal
