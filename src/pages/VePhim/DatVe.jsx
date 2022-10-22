import React from 'react'
import { useSelector } from 'react-redux'
import HangGhe from './HangGhe'
import ThongTinDat from './ThongTinDat'

export default function DatVe() {
  const { arrDanhSachGhe } = useSelector(state => state.vePhimReducer)

  return (
    <div className='vePhim'>
      <div className="fadeBackground">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h2 className='text-warning text-center'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h2>
              <p>Màn hình</p>
              <div className='screen'></div>
              <div className="hangSo d-flex ">
                {arrDanhSachGhe.map((hangGhe, index) => {
                  return <div className="hangGhe" key={index}>
                    <span className='text-light'>{hangGhe.hang}
                    </span>
                    <HangGhe index={index} />
                  </div>
                })}

              </div>
            </div>
            <div className="col-4 text-center">
              <h2>DANH SÁCH GHẾ BẠN CHỌN</h2>
              <ThongTinDat />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
