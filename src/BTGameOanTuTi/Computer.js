import React, { Component } from 'react'
import {connect} from 'react-redux';

class Computer extends Component {
    render() {

        let keyframe =`@keyframes randomItem${Date.now()} {
            from {top: 0px;}
            to {top: 200px;}
        }`
        return (
            <div>
                <div className="text-center playerGame">
                    <style>
                        {keyframe}
                    </style>
                <div className="theThink" style= {{position: 'relative'}}>
                    <img style={{position: 'absolute', left: '30%', animation:`randomItem${Date.now()} 0.5s`, 
                    transform: 'rotate(-130deg)'}} className="mt-3" width={100} hight={100} 
                    src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh}/>
                </div>
                <div className="Speech-bubbke"></div>
                <img style={{width:150, hight: 150}}src="../.././img/playerComputer.png" 
                alt="../.././img/playerComputer.png"/>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        computer: state.BaiTapGameOanTuTiReducer.computer
    }
}

export default connect (mapStateToProps, null)(Computer);

