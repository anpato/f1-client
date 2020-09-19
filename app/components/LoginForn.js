import React from 'react'
import {
  DialogContent,
  TextField,
  Button,
  Text,
  Link,
  Divider,
  CircularProgress,
  TextIconSpacing,
  ArrowForwardSVGIcon,
  FormMessage
} from 'react-md'
import FbLogin from 'react-facebook-login'
import { connect } from 'react-redux'
import { Link as RRLink, useHistory } from 'react-router-dom'
import GoogleBtn from '../assets/google_signin.png'
import { HandleLoginForm, SignInUser, ToggleLoginError } from '../store/actions'

const LoginForm = ({
  authForm,
  authState,
  handleLoginForm,
  submitLogin,
  toggleFormError
}) => {
  const history = useHistory()
  const handleChange = (e) => {
    const { name, value } = e.target
    handleLoginForm(name, value)
    toggleFormError(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submitLogin(authForm, history.push('/auth/profile'))
  }

  const toggleButtonDisabled = () => {
    if (authForm.email && authForm.password && !authState.formError) {
      return false
    } else if (authState.formError) {
      return true
    } else {
      return true
    }
  }
  return (
    <DialogContent className="login-form">
      <div style={{ height: '2.5rem' }}></div>
      <div style={{ padding: '1em 0' }}>
        <form onSubmit={handleSubmit}>
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
          {authState.formError ? (
            <div style={{ textAlign: 'center', width: '100%' }}>
              <Text id="form-error" style={{ margin: 'auto' }}>
                Invalid Credentials
              </Text>
            </div>
          ) : (
            <div></div>
          )}
          <Button
            theme="primary"
            themeType="outline"
            onClick={handleSubmit}
            disabled={toggleButtonDisabled()}
            type="submit"
          >
            <TextIconSpacing
              iconAfter
              icon={
                authState.signInLoading ? (
                  <CircularProgress id="loading-form" centered={false} />
                ) : (
                  <ArrowForwardSVGIcon />
                )
              }
            >
              Login
            </TextIconSpacing>
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
  authForm: Auth.loginForm,
  authState: Auth
})

const mapDispatchToProps = (dispatch) => ({
  handleLoginForm: (name, value) => dispatch(HandleLoginForm(name, value)),
  toggleFormError: (boolean) => dispatch(ToggleLoginError(boolean)),
  submitLogin: (formData) => dispatch(SignInUser(formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
