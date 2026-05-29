import React from 'react'
import DetailTable from './Detail'

const Product = ({products, setCart}) => {
  return (
    <div className='col-3 card-ss'>
      <div className='card'>
        <img className='card-img-top' src={products.hinhAnh} alt={products.maSP} />
      </div>
      <div className='card-body'>
        <h4 className='card-title card-text'>{products.tenSP}</h4>
        <p className='card-title card-text price'>{(products.giaBan).toLocaleString('vi-VN')}{"  "}VND</p>
        <button className='btn-add' onClick={() => setCart(prev => {
          const tonTai = prev.find(item => item.maSP === products.maSP);
          if(tonTai) {
            return prev.map(item => item.maSP === products.maSP ? {...item, soLuong: item.soLuong + 1, thanhTien: (item.thanhTien + products.giaBan).toLocaleString('vi-VN')} : item)
          }
          else{
            return [...prev, {...products, soLuong: 1, thanhTien: (products.giaBan).toLocaleString('vi-VN')}]
          }
          
          })}>Add to cart</button>
        <button className='btn-add btn-detail' data-bs-toggle="modal" data-bs-target={`#btnDetail-${products.maSP}`}>See detail</button>
      </div>

      <div className="modal fade" id={`btnDetail-${products.maSP}`} tabIndex={-1} aria-labelledby={`exampleModalLabel-${products.maSP}`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`exampleModalLabel-${products.maSP}`}>{products.tenSP}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <DetailTable item={products} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
