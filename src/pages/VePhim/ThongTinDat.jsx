import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { huyGhe } from '../../redux/Reducers/vePhimReducer'

export default function ThongTinDat() {
    const { arrGheDangDat } = useSelector(state => state.vePhimReducer)
    const dispatch = useDispatch()
    
    let total = arrGheDangDat.reduce((total, currentTotal) => {
        return total += currentTotal.gia
    }, 0)
    console.log(total)
    return (
        <>
            <div className='mt-4'>
                <div className="inforBtn">
                    <button className='gheDuocChon'></button>
                    <span>ghế đã đặt</span>
                </div>
                <div className="inforBtn">
                    <button className='gheDangChon'></button>
                    <span>ghế đang đặt</span>
                </div>
                <div className="inforBtn">
                    <button className='ghe m-0'></button>
                    <span>ghế chưa đặt</span>
                </div>
            </div>


            <table className="table mt-5" border="{2}">
                <thead>
                    <tr>
                        <th scope="col">Số Ghế</th>
                        <th scope="col">Giá</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {arrGheDangDat.map((gheDaDat, index) => {
                        return <tr key={index} >
                            <td>{gheDaDat.soGhe}</td>
                            <td>{gheDaDat.gia}</td>
                            <td><button style={{ fontSize: 18 }} className="btn btn-danger" onClick={() => {
                                const action = huyGhe(gheDaDat.soGhe);
                                dispatch(action)
                            }}>Hủy</button></td>
                        </tr>
                    })}


                    {<tr>
                        <td></td>
                        <td className='tongTien'>Tổng Tiền</td>
                        <td className='tongTien'>{total}</td>
                    </tr>
                    }
                </tbody>
            </table>
        </>
    )
}
