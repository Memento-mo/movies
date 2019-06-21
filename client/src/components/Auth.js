import React from 'react';
import { connect } from 'react-redux';

const Auth = ({ auth }) => {
  const renderContent = () => {
    switch(auth) {
      case null:
        return 'Загрузка...';
      case false:
        return (
          <a href="/auth/google">Вход</a>
        );
      default:
        return 'Вход выполнен';
    }
  }
  
  return (
    <div>
      { renderContent() }
    </div>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(Auth)
