import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datGhe } from '../../redux/Reducers/vePhimReducer';


export default function HangGhe(props) {
  const { arrDanhSachGhe, arrGheDangDat } = useSelector(state => state.vePhimReducer);
  const dispatch = useDispatch();
  console.log(arrDanhSachGhe)
  return (
    <>
      {arrDanhSachGhe[props.index].danhSachGhe.map((ghe, index) => {
        let cssGheDaDat = ''
        let gheDaDat = false;
        if (ghe.daDat === true) {
          cssGheDaDat = 'gheDuocChon'
        }

        let indexGhe = arrGheDangDat.findIndex((gheDangDat) => {
          return gheDangDat.soGhe === ghe.soGhe;
        })

        if (indexGhe !== -1) {
          cssGheDaDat = 'gheDangChon'
        }

        if (ghe.soGhe === `1` || ghe.soGhe === `2` || ghe.soGhe === `3` || ghe.soGhe === `4` || ghe.soGhe === `5` || ghe.soGhe === `6` || ghe.soGhe === `7` || ghe.soGhe === `8` || ghe.soGhe === `9` || ghe.soGhe === `10` || ghe.soGhe === `11` || ghe.soGhe === `12` ) {
          cssGheDaDat = 'rowNumber'
          gheDaDat = true
        }

        return <button key={index} disabled={gheDaDat} className={`ghe ${cssGheDaDat}`} onClick={() => {
          let gheDat = {
            soGhe: ghe.soGhe,
            gia: ghe.gia
          }
          const action = datGhe(gheDat);
          dispatch(action)
        }}>{ghe.soGhe}</button>
      })}
    </>
  )
}
