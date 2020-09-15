import React from 'react'
import {
  DialogContent,
  TextField,
  Button,
  Text,
  Link,
  Divider,
  FontIcon
} from 'react-md'
import FbLogin from 'react-facebook-login'
import { connect } from 'react-redux'
import { Link as RRLink } from 'react-router-dom'
import GoogleBtn from '../assets/google_signin.png'
import { HandleLoginForm } from '../store/actions'

const LoginForm = ({ authForm, handleLoginForm }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    handleLoginForm(name, value)
  }
  return (
    <DialogContent className="login-form">
      <div style={{ height: '2.5rem' }}></div>
      <div style={{ padding: '1em 0' }}>
        <form>
          <TextField
            className="login-input"
            id="login-email"
            label="Email"
            type="email"
            name="email"
            value={authForm.email}
            onChange={handleChange}
            required
          />
          <TextField
            id="login-password"
            className="login-input"
            label="Password"
            type="password"
            name="password"
            value={authForm.password}
            onChange={handleChange}
            required
          />
          <Button theme="primary" themeType="contained">
            Login
          </Button>
        </form>
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <Text>
            <Link to="/" component={RRLink}>
              {' '}
              Forgot Password?
            </Link>
          </Text>
          <Text>
            <span>Don't have an account?</span>{' '}
            <span>
              <Link to="/" component={RRLink}>
                Click Here
              </Link>
              <span></span> to sign up.
            </span>
          </Text>
        </div>
      </div>
      <Divider />
      <div style={{ padding: '1em 0', display: 'flex' }}>
        <Button>
          <img src={GoogleBtn} alt="google-signin" />
        </Button>
      </div>
    </DialogContent>
  )
}

const mapStateToProps = ({ Auth }) => ({
  authForm: Auth.loginForm
})

const mapDispatchToProps = (dispatch) => ({
  handleLoginForm: (name, value) => dispatch(HandleLoginForm(name, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
