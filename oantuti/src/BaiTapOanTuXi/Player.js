import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img className="mt-3" style={{ width: 100, height: 100, transform: 'rotate(120deg)' }} src={this.props.mangDatCuoc.find(item=>item.datCuoc===true).hinhAnh} alt={this.props.mangDatCuoc.find(item=>item.datCuoc===true).hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/gameOanTuXi/player.png" alt="./img/gameOanTuXi/player.png" />
                <div className="row">
                    {this.props.mangDatCuoc.map((item, index) => {

                        let border = {};
                        if(item.datCuoc){
                            border = {border:'3px solid orange'}
                        }

                        return <div className="col-4">
                            <button style={border} className="btnItem"><img style={{ width: 35, height: 35 }} src={item.hinhAnh} alt={item.hinhAnh} onClick={()=>{
                                this.props.datCuoc(item.ma);
                            }}/></button>
                        </div>
                    })}

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc)=>{
            dispatch({
                type:'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)