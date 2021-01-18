import React, {createElement} from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clockStarted: false,
            clockStopped: true,
            hours: 0,
            minutes: 0,
            seconds: 0,
            play: true
        }
    }

    handleClockStart(e) {
        e.preventDefault();
        this.setState({play:false});
        if (this.state.clockStopped && this.state.play) {
            this.clock = setInterval(() => {
                this.setState({clockStarted: true, clockStopped: false, play: true});
                if (this.state.clockStarted) {
                    if (this.state.seconds >= 60) {
                        this.setState((prevState) => ({minutes: prevState.minutes + 1, seconds: 0}))
                    }
                    if (this.state.minutes >= 60) {
                        this.setState((prevState) => ({hours: prevState.hours + 1, minutes: 0, seconds: 0}))
                    }
                    this.setState((prevState) => ({seconds: prevState.seconds + 1}))
                }
            }, 1000)
        }
    }

    handleClockStop(e) {
        e.preventDefault()
        this.setState({clockStarted: false, clockStopped: true, seconds: 0, minutes: 0, hours: 0})
        clearInterval(this.clock)
    }

    handleClockReset(e) {
        e.preventDefault()
        this.setState({clockStarted: false, clockStopped: true, seconds: 0, minutes: 0, hours: 0})
    }

    handleClockPause(e) {
        e.preventDefault()
            this.setState({clockStarted: false, clockStopped: true})
            clearInterval(this.clock)
    }

    render() {
        return (
            <div className='container'>
                <h2 className='title'>
                    Clock
                </h2>
                <div className="clock__container">
                    <div className="clock__time">
                        {this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}
                    </div>
                    <div className="clock__control">
                        <button className="btn btn--start" onClick={this.handleClockStart.bind(this)}>Start clock
                        </button>
                        <button className="btn btn--stop" onClick={this.handleClockStop.bind(this)}>Stop timer</button>
                        <button className="btn btn--pause" onDoubleClick={this.handleClockPause.bind(this)}>Pause
                        </button>
                        <button className="btn btn--reset" onClick={this.handleClockReset.bind(this)}>Reset Timer
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
import style from './style.css'

const rootElement = document.getElementById("root");
ReactDOM.render(<Layout/>, rootElement);

