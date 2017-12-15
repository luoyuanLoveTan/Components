/**
 * Created by yuan.luo on 2017/12/11.
 */
import React, { Component } from 'react';
import './css/input.css';
import './css/newName.css';

class inputRange extends React.Component {
    constructor(props) {
        super(props)
        console.log("this.props");
        this.state = {
            currentValue: this.props.data.currentValue || 3
        }
        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(e) {
        this._stopPropagation(e);
        const el = e.target;
        this.setState({
            currentValue: el.value
        })
    }

    _stopPropagation(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        } else {
            window.event.cancelBubble = true;
            window.event.returnValue = false;
        }
    }

    _handleClick(e) {
        console.log("_handleClick");
    }

    render() {
        const currentValue = this.state.currentValue
        const data = this.props.data
        const max = data.maxValue || 100
        const min = data.minValue || 0
        const step = data.stepValue || 1
        const unit = data.unit || ''

        return (
            <div className="App_box flex">
                <div className="progressbar">
                    <div className="inputJust">
                        <div className="backrange">
                            <div className="progress">
                                <div className="progressing"
                                     style={{width: (currentValue - min) / (max - min) * 100 + "%"}}
                                >
                                    <p className="bubble">
                                        {currentValue + unit}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <input type="range" min={min} max={max} step={step} value={currentValue}
                               onChange={this._handleChange} onTouchStart={this.active} onTouchEnd={this.unactive}/>
                        <span>{min}</span>
                        <span>{max}</span>
                    </div>
                </div>
                <div className="nameBtn" onClick={this._handleClick}>

                </div>
            </div>
        );
    }
}

export default inputRange;
