class TimerWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { timeLeft: null, timer: null }
    this.startTimer = this.startTimer.bind(this)
  }

  startTimer(timeLeft) {
    clearInterval(this.state.timer)
    let timer = setInterval(() => {
      var timeLeft = this.state.timeLeft - 1
      console.log('2: Inside of setInterval')
      if (timeLeft == 0) clearInterval(timer)
      this.setState({ timeLeft: timeLeft })
    }, 1000)
    console.log('1: After setInterval')
    return this.setState({ timeLeft: timeLeft, timer: timer })
  }

  render() {
    return (
      <div className='row-fluid'>
        <h2>Timer</h2>
        <div className='btn-group' role='group'>
          <Button time='5' startTimer={this.startTimer} />
          <Button time='10' startTimer={this.startTimer} />
          <Button time='15' startTimer={this.startTimer} />
        </div>
        <Timer timeLeft={this.state.timeLeft} />
        <audio id='end-of-time' src='flute_c_long_01.wav' preload='auto'></audio>
      </div>
    )
  }
}

class Timer extends React.Component {
  render() {

  }
}

class Button extends React.Component {
  startTimer(event) {

  }

  render() {

  }
}

ReactDOM.render(
  <TimerWrapper />,
  document.getElementById('timer-app')
)
