import React, { useState } from 'react'
import List from './List'
import Detail from './Detail'
import Admin from './Admin'
import Cart from './Cart'
import data from './data.json'

const Capstone = (products) => {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [productList, setProductList] = useState(data);

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
        <div className="d-flex w-100">
            <h1 className="p-3 px-5">Cyberstore</h1>
            <button type='button' className='btn btn-admin btn-add' data-bs-toggle="modal" data-bs-target="#adminModal">Admin control panel</button>
            <button type="button" className="btn btn-primary btn-add btn-cart" data-bs-toggle="modal" data-bs-target="#cartModal">
                Cart[{(()=>{
                  let count = 0;
                  for(let i = 0; i < cart.length; i++){
                    count += cart[i].soLuong;
                  }
                  return count;
                })()}]
            </button>
            <Admin productList={productList} setProductList={setProductList} />
        </div>

      <div className='d-flex'>
        <h2 className='px-5'>Khám phá sản phẩm: </h2>
        <div className="d-flex gap-3 flex-grow-1 mx-5" style={{ maxWidth: '1000px' }}>
            <select className="form-select " value={type} aria-label="Filter 1" onChange={(e) => setType(e.target.value)}>
                <option value="">Type of product:</option>
                <option value="Watch">Galaxy Watch</option>
                <option value="Fit">Galaxy Fit</option>
                <option value="Buds">Galaxy Buds</option>
            </select>
            <select className="form-select" value={price} aria-label="Filter 2" onChange={(e) => setPrice(e.target.value)}>
                <option value="">Sort order: </option>
                <option value="1">High to low</option>
                <option value="2">Low to high</option>
            </select>
            <button 
              className='btn btn-secondary'
              onClick={() => {
                setType('');
                setPrice('');
              }}
            >
              Reset
            </button>
        </div>
      </div>
        <List list={productList} setCart={setCart} type={type} price={price}/>
        <Cart cart={cart} setCart={setCart}/>
    </div>
  )
}

export default Capstone;