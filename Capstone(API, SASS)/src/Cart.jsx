import React from 'react'


const Cart = (props) => {
    const {cart, setCart} = props;
  const renderHTMLCart = () => {
    return cart.map((cartItem) => {
        return (
        <tr key={cartItem.maSP}>
            <td>{cartItem.maSP}</td>
            <td>{cartItem.tenSP}</td>
            <td>{cartItem.giaBan.toLocaleString('vi-VN')}</td>
            <td>{cartItem.soLuong}</td>
            <td>{(cartItem.soLuong * cartItem.giaBan).toLocaleString('vi-VN')}</td>
            <td><button className='btn btn-danger' onClick={()=>{
              const updatedCart = cart.map((item) => {
                if(item.maSP === cartItem.maSP) {
                  return {...item, soLuong: item.soLuong - 1};
                }
                return item;
              }).filter(item => item.soLuong > 0);
              setCart(updatedCart);
            }}>Delete</button></td>
        </tr>
        )
    })
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.soLuong * item.giaBan), 0);
  }

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  }


  return (
    <div>
      <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Gio hang</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                    {cart.length === 0 ? (
                      <p className="text-center text-muted">Gio hang trong, mua gi di</p>
                    ) : (
                      <>
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Ma SP</th>
                                <th scope="col">Ten</th>
                                <th scope="col">Gia tien</th>
                                <th scope="col">So luong</th>
                                <th scope="col">Thanh tien</th>
                                <th scope="col">Settings</th>
                              </tr>
                            </thead>
                            <tbody>
                              {renderHTMLCart()}
                            </tbody>
                          </table>
                        </div>
                        <div className="text-end">
                          <h5>Tong cong: <strong>{calculateTotal().toLocaleString('vi-VN')} VND</strong></h5>
                        </div>
                      </>
                    )}
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={handleClearCart}>Clear</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
