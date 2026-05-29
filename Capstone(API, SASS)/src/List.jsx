import React from 'react'
import Product from './Product';


const List = (props) => {
  const {list, setCart, type, price} = props;
  let filteredList = list.filter(item => type ? item.loaiSP === type : true);
  list.filter(item => type ? item.loaiSP === type : true)
  if(price ==='1')filteredList.sort((a,b) => b.giaBan - a.giaBan);
  else if(price ==='2')filteredList.sort((a,b) => a.giaBan - b.giaBan);
    const renderList = () => {
        const {list} = props;
        return filteredList.map((products) => {
            return <Product key={products.maSP} products={products} setCart={setCart}/>
        })
    }
  return (
    <div className='container-fluid'>
      <div className=' row layout'>{renderList()}</div>
    </div>
  )
}

export default List
