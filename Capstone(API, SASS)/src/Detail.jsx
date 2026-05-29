import React from 'react'

const DetailTable = ({ item }) => {
  if (!item) {
    return <p>No data available</p>
  }

  return (
    <div className="detail-table">
      <table className="table table-striped">
        <tbody>
          <tr>
            <td><strong>Product Code:</strong></td>
            <td>{item.maSP}</td>
          </tr>
          <tr>
            <td><strong>Product Name:</strong></td>
            <td>{item.tenSP}</td>
          </tr>
          <tr>
            <td><strong>Type:</strong></td>
            <td>{item.loaiSP ? item.loaiSP : 'N/A'}</td>
          </tr>
          <tr>
            <td><strong>Color:</strong></td>
            <td>{item.mauSac ? item.mauSac : 'N/A'}</td>
          </tr>
          <tr>
            <td><strong>Price:</strong></td>
            <td>
              {item.giaBan ? (item.giaBan).toLocaleString('vi-VN') : '0'} VND
            </td>
          </tr>
          {/* Display specs if available */}
          {item.manHinh && (
            <tr>
              <td><strong>Display:</strong></td>
              <td>{item.manHinh}</td>
            </tr>
          )}
          {item.thongSoPin && (
            <tr>
              <td><strong>Battery:</strong></td>
              <td>{item.thongSoPin}</td>
            </tr>
          )}
          {item.tinhNang && (
            <tr>
              <td><strong>Features:</strong></td>
              <td>{item.tinhNang}</td>
            </tr>
          )}
          {item.chatLieu && (
            <tr>
              <td><strong>Material:</strong></td>
              <td>{item.chatLieu}</td>
            </tr>
          )}
          <tr>
            <td><strong>Image:</strong></td>
            <td>
              {item.hinhAnh ? (
                <img src={item.hinhAnh} alt={item.tenSP} style={{ maxWidth: '200px', height: 'auto' }} />
              ) : (
                <p>No image</p>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DetailTable