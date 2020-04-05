import React from 'react';
import { connect } from 'react-redux';
import { removeUser as removeUserAction } from 'ducks/actions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button } from '../../components/buttons/Button';
import cn from './DashboardPage.module.scss';

export class DashboardPage extends React.PureComponent {
  static propTypes = {
    removeUser: PropTypes.func,
    history: PropTypes.object,
  };

  handleLogout = () => {
    this.props.removeUser();
    this.props.history.push('/');
  };

  render() {
    return (
      <div className={cn.logout}>
        <Button onClick={this.handleLogout}>Logout</Button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  removeUser: removeUserAction,
};

export default withRouter(connect(null, mapDispatchToProps)(DashboardPage));
