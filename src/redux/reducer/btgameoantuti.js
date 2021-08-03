const stateDefault = {
    mangDatCuoc: [
        {ma: 'keo', hinhAnh: '../.././img/keo.png', datCuoc: true},
        {ma: 'bua', hinhAnh: '../.././img/bua.png', datCuoc: false},
        {ma: 'bao', hinhAnh: '../.././img/bao.png', datCuoc: false},
    ],
    ketQua: "I'm iron man, i love you 3000 !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer:{ma: 'keo', hinhAnh: '../.././img/keo.png'},
}

const BaiTapGameOanTuTiReducer = (state=stateDefault, action)=> {
    switch(action.type){
        case 'CHON_KEO_BUA_BAO': {
            let mangCuocUpdate =[...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item,index)=>{
                if(item.ma === action.maCuoc){
                    return{...item, datCuoc:true}
                }
                return {...item, datCuoc:false}
            })
            
            state.mangDatCuoc = mangCuocUpdate;
            return {...state}
        }

        case 'RANDOM': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc
            [soNgauNhien];

            state.computer = quanCuocNgauNhien;

            return {...state}
        }

        case 'ENDGAME': {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Hòa !!';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Thua !!';
                    } else {
                        state.soBanThang += 1;
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                    };
                    break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.soBanThang += 1;
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Hòa !!';
                    } else {
                        state.ketQua = 'Thua !!';
                    };
                    break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Thua !!';
                    } else if (computer.ma === 'bua') {
                        state.soBanThang += 1;
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                    } else {
                        state.ketQua = 'Hòa !!';
                    };
                    break;
                
                default: 
                state.ketQua = "I'm iron man, i love you 3000 !!!";
            }
        }
        state.soBanChoi += 1;
        return { ...state }
        default : return { ...state }
    }
}

export default BaiTapGameOanTuTiReducer;