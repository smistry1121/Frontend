import React, { Component, PropTypes } from 'react';
import Alert from '../Alert';
import Navbar from '../Navbar';
import PatientList from '../PatientList';

class PatientPortal extends Component {
  constructor () {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  alerts () {
    if (!this.props.ui.alertMessage) return;

    return <Alert message={this.props.ui.alertMessage}
                  sendAlert={this.props.actions.sendAlert} />;
  }

  handleClick () {
    this.props.actions.sendAlert({message: 'This is a test alert.'});
  }

  leftSide () {
    if (!this.props.ui.leftSideComponent) return <PatientList {...this.props} />;
    
    const LeftSide = this.props.ui.leftSideComponent;
    return <LeftSide {...this.props} />
  }

  rightSide () {
    if (!this.props.ui.rightSideComponent) return <h2>Hello Zack!</h2>;

    const RightSide = this.props.ui.rightSideComponent;
    return <RightSide {...this.props} />
  }

  render () {
    console.log(this.props, "PatientPortal");
    return (
      <div className="PatientPortal">
        {this.alerts()}
        <Navbar actions={this.props.actions} />

        <div className="PatientPortal-leftSide">
          {this.leftSide()}
        </div>
        
        <div className="PatientPortal-rightSide">
          {this.rightSide()}
        </div>
      </div>
    );
  }
}

PatientPortal.propTypes = {
  actions: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
};

export default PatientPortal;
