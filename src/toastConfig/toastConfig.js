import { ToastContainer } from 'react-toastify'

export const Toast = () => (
  <ToastContainer 
    position='top-right'
    autoClose={3000}
    hideProgressBar
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
)