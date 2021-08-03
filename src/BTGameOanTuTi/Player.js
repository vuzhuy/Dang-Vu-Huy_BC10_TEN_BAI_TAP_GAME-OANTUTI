import React, { Component } from 'react'
import {connect} from 'react-redux';

class Player extends Component {
    render () {
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img style={{transform:'rotate(-130deg)'}} className="mt-3" width={100} hight={100} 
                    src={this.props.mangDatCuoc.find(item=>item.datCuoc === true).hinhAnh} 
                    alt={this.props.mangDatCuoc.find(item=>item.datCuoc === true).hinhAnh}/>
                </div>
                <div className="Speech-bubble"></div>
                <img style={{width:150, hight: 150}}src="../.././img/player.png" alt="../.././img/player.png"/>

                <div className="row">
                    {this.props.mangDatCuoc.map((item,index) => {

                        // xét giá trị đặt cược thêm viền cho item được chọn
                        let border = {};
                        if(item.datCuoc){
                            border = {border:'3px solid orange'};
                        }

                        return <div className="col-4">
                        <button onClick={() =>{
                            this.props.datCuoc(item.ma);
                        }} style={border} className="btnItem">
                            <img width={35} hight={35} src={item.hinhAnh} alt={item.hinhAnh}/>
                        </button>
                        
                    </div>
                    })}
                
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapGameOanTuTiReducer.mangDatCuoc,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Player);
