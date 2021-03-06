import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {
    
    render() {
        let keyframe = `@keyframes randomItem${Date.now()}{
            0% {top:-50px;}
            25% {top:100px;}
            50% {top:-50px;}
            75% {top:100px;}
            100% {top:0px;}
        }`
        return (
            <div className="text-center playerGame">
                <style>
                {keyframe}
                </style>
                <div className="theThink" style={{position:"relative"}}>
                    <img style={{position:'absolute',left:'25%',animation:`randomItem${Date.now()} 0.1s`,width: 100, height: 100, transform:'rotate(120deg)' }} className="mt-3" src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/gameOanTuXi/playerComputer.png" alt="./img/gameOanTuXi/playerComputer.png" />
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        computer: state.BaiTapOanTuXiReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)