import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            step: 1,
            max: 7,
            min: 3,
        }
    }

    adde = () => {
        this.setState({
            count: this.state.count + this.state.step
        })
    }

    subtract = () => {
        if (this.state.count !== 0) {
            this.setState({
                count: this.state.count - this.state.step
            })
        }
        else {
            this.setState({
                count: this.state.count
            })
        }
    }

    handleMax = (event) => {
        this.setState({
            max: +event.target.value,
        })
        if (this.state.max === this.state.min) {
            this.setState({
                max: this.state.min + 1
            })
        }
    }
    handleMin = (event) => {
        this.setState({
            min: +event.target.value,
            count: +event.target.value
        })
        if (this.state.min === this.state.max) {
            this.setState({
                min: this.state.max - 1
            })
        }
    }


    render() {
        const count = this.state.count
        return (
            <div>
                <div className='bigCounter'>
                    <div className='btnTop'>
                        <span className='btnTop-p'>{count}</span>

                        <button onClick={this.subtract} className="btnMinus" disabled={this.state.count <= this.state.min}> - </button>
                        <button onClick={this.adde} className="btn" disabled={this.state.count >= this.state.max}> + </button>
                    </div>
                    <div className='apps'>
                        <span className='step-text'>STEPS</span>
                    <input
                        className='steps'
                        type="number"
                        value={this.state.step}
                        onChange={(evt) => this.setState({ step: +evt.target.value })}
                    />
                    <button
                        className='reset'
                        value="0"
                        onClick={(evt) => this.setState({ count: +evt.target.value })}
                    >Reset to 0</button>
                    <input
                        value={this.state.max}
                        type="number"
                        onChange={(evt) => this.handleMax(evt)}
                        className='max'
                    />
                    <input
                        value={this.state.min}
                        type="number"
                        onChange={(evt) => this.handleMin(evt)}
                        className='min'
                    />
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter
