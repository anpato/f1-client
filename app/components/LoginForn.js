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

const LoginForm = () => {
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
            required
          />
          <TextField
            id="login-password"
            className="login-input"
            label="Password"
            type="password"
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

export default connect()(LoginForm)
