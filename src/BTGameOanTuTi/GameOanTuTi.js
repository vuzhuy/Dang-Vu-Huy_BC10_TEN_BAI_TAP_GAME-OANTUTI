import React, { Component } from 'react'
import './GameOanTuTi.css'
import Player from './Player'
import Computer from './Computer'
import KetQuaGame from './KetQuaGame'
import {connect} from 'react-redux';

class GameOanTuTi extends Component {
    render() {
        return (
            <div className="gameOanTuTi ">
                <div className="row text-center ">
                    <div className="col-4 mt-5">
                        <Player/>
                    </div>
                    <div className="col-4 mt-5">
                        <KetQuaGame/>
                        <button onClick={()=> {
                            this.props.playGame()
                        }} className="btn btn-success p-2 display-4 mt-3">Play Game</button>
                    </div>
                    <div className="col-4 mt-5">
                        <Computer/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {

            let count = 0;
            let randomComputerItem = setInterval(() =>{
                dispatch ({
                    type: 'RANDOM'
                })
                count ++;
                if(count > 13){
                    clearInterval(randomComputerItem)
                    dispatch ({
                        type: 'ENDGAME',
                    })
                }
            },100)
            
        }
    }
}

export default connect(null, mapDispatchToProps)(GameOanTuTi);