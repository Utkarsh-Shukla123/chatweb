/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
import RegisterForm from 'components/auth/RegisterForm'
import { register } from 'actions'
import { useToasts } from 'react-toast-notifications'
import onlyGuest from 'components/hoc/onlyGuest'

// import { withRouter } from 'react-router-dom'

const Register = (props) => {
  const { addToast } = useToasts()

  const registerUser = (userData) => {
    register(userData)
      .then(
        _ => () => {},
        errorMessage => addToast(errorMessage, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 }))
  }

  return (
    <div className="auth-page">
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Register</h3>
          <p className="subtitle has-text-grey">Please Register to proceed.</p>
          <div className="box">
            <figure className="avatar">
              <img src="https://cdn.pixabay.com/photo/2016/08/12/22/59/logo-animation-1589902__480.jpg" alt="Company Logo" />
            </figure>
            <RegisterForm onRegister={registerUser} />
          </div>
       </div>
      </div>
    </div>
  )
}

// export default withRouter(Register)
export default onlyGuest(Register)







