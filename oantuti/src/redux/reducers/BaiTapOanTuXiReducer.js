const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/gameOanTuxi/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './img/gameOanTuxi/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/gameOanTuxi/bao.png', datCuoc: false },
    ],
    ketQua: "I'm iron man, i love you 3000 !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/gameOanTuxi/keo.png' }
}

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'CHON_KEO_BUA_BAO': {
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            state.mangDatCuoc = mangCuocUpdate;
            return { ...state }
        }
        case 'RAN_DOM': {

            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien

            return { ...state }
        }
        case 'END_GAME': {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Hòa nhau !!!';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Thua sml !!!';
                    } else {
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                        state.soBanThang += 1;
                    }
                    break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                        state.soBanThang += 1;
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Hòa nhau !!!';
                    } else {
                        state.ketQua = 'Thua sml !!!';
                    }
                    break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Thua sml !!!';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                        state.soBanThang += 1;
                    } else {
                        state.ketQua = 'Hòa nhau !!!';
                    }
                    break;
                    
                    default : state.ketQua = "I'm iron man, i love you 3000 !!!";
                    state.soBanThang += 1;
                    
                    return {...state};
            }

            state.soBanChoi += 1;
            return { ...state }
        }

        default: return { ...state }
    }
}

export default BaiTapOanTuXiReducer;