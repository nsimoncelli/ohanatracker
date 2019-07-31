
import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.number = null;
    this.state = {
      stopWatchOff: true,
      counter: 0
    };
    this.handleControl = this.handleControl.bind(this);
    this.intervalCall = this.intervalCall.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  intervalCall() {
    if (this.state.stopWatchOff) {
      this.number = setInterval(this.incrementCounter, 1000);
    } else {
      clearInterval(this.number);
    }
  }
  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  handleReset() {
    if (this.state.stopWatchOff) {
      this.setState({
        counter: 0
      });
    }
  }
  handleControl() {
    if (this.state.stopWatchOff) {
      this.setState({ stopWatchOff: !this.state.stopWatchOff });
      this.intervalCall();
    } else {
      this.setState({ stopWatchOff: !this.state.stopWatchOff });
      this.intervalCall();
    }
  }
  render() {
    const controlIcon = this.state.stopWatchOff ? 'far fa-play-circle' : 'far fa-pause-circle';
    return (
      <div className="stopwatchContainer">
        <div className="counterContainer">
          <div className="counter" onClick={this.handleReset}>{this.state.counter}</div>
        </div>
        <div onClick={this.handleControl} className={`controls ${controlIcon}`}></div>
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.getElementById('root')
);
