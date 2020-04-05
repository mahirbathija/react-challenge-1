import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setModal as setModalAction, setLoading as setLoadingAction, setUser as setUserAction } from 'ducks/actions';
import cn from './RootPage.module.scss';
import { Button } from '../../components/buttons/Button';
import { Input } from '../../components/inputs/Input';
import { Loading } from '../../components/loading/Loading';

export class RootPage extends Component {
  static propTypes = {
    setLoading: PropTypes.func,
    setUser: PropTypes.func,
    loading: PropTypes.bool,
    history: PropTypes.object,
  };

  state = {
    emailAddress: '',
    // eslint-disable-next-line react/no-unused-state
    password: '',
  };

  handleLogin = () => {
    this.props.setLoading(true);
    setTimeout(() => {
      this.props.setLoading(false);
      this.props.setUser(this.state.emailAddress);
      this.props.history.push('/dashboard');
    }, 3000);
  };

  onEmailChange = email => {
    this.setState({ emailAddress: email });
  };

  onPasswordChange = pass => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ password: pass });
  };

  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <div className={cn.page}>
        <div className={cn.outerBox}>
          <div className={cn.cognLogo}>
            <img src={`${process.env.PUBLIC_URL}/cogn-logo-white.png`} alt="Cognitiv login logo" />
          </div>
          <div className={cn.container}>
            <div className={cn.loginContainer}>
              <h2 className={cn.h2}>Cognitiv Login</h2>
              <Input autocomplete="on" type="email" placeholder="Email" onChange={this.onEmailChange} />
              <Input
                autocomplete="on"
                type="password"
                placeholder="Password"
                onChange={this.onPasswordChange}
                variant="password"
              />
              <Button onClick={this.handleLogin}>Sign In</Button>
            </div>
            <div className={cn.termsContainer}>
              <h2 className={cn.h2}>Cognitiv Terms</h2>
              <div className={cn.terms}>
                <p className={cn.termsText}>
                  By proceeding to login to your account and use Cognitiv, you are agreeing to our terms of Service and
                  Privacy Policy.
                </p>
              </div>
              <div>
                <p className={cn.forgotPass}>Forgot Password?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.settings.loading,
});

const mapDispatchToProps = {
  setModal: setModalAction,
  setLoading: setLoadingAction,
  setUser: setUserAction,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RootPage));
