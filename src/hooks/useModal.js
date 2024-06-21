import { useEffect, useState } from 'react'

export function useModal (productSelect) {
  const [openModal, setOpenModal] = useState(false)

  const closeModal = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    if (productSelect) {
      setOpenModal(true)
    } else {
      setOpenModal(false)
    }
  }, [productSelect])

  return { openModal, closeModal }
}
