import React from "react";
import {
  SpinnerContainer,
  SpinnerButton,
  SpinnerValue
} from "../spinner/styled";

class Spinner extends React.Component {
  state = {
    value: this.props.initial || 1
  };

  dec = () => {
    const { onChange } = this.props;
    const { value } = this.state;
    const newValue = value - 1;
    const finalValue = newValue < 1 ? 1 : newValue;
    this.setState({
      value: finalValue
    });
    if (onChange) {
      onChange(finalValue);
    }
  };

  inc = () => {
    const { value } = this.state;
    const newValue = value + 1;
    const finalValue = newValue > 10 ? 10 : newValue;
    this.setState({
      value: finalValue
    });
    if (this.props.onChange) {
      this.props.onChange(finalValue);
    }
  };

  render() {
    const { value } = this.state;
    return (
      <SpinnerContainer>
        <SpinnerButton onClick={this.dec}>-</SpinnerButton>
        <SpinnerValue>{value}</SpinnerValue>
        <SpinnerButton onClick={this.inc}>+</SpinnerButton>
      </SpinnerContainer>
    );
  }
}

export default Spinner;
