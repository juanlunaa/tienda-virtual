import { useEffect } from 'react'
import './css/Modal.css'

export function Modal ({ children, isOpen, closeModal }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isOpen])

  return (
    <section className='modal'>
      <div className='modal-content'>
        <span onClick={closeModal} className='close-modal'><i className='bi bi-x-lg' /></span>
        {children}
      </div>
    </section>
  )
}
