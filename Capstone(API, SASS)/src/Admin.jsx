import React, { useState } from 'react'
import { createProduct, updateProduct, deleteProduct } from './services/api'

const Admin = ({ productList, setProductList }) => {
  const [products, setProducts] = useState(productList);
  const [formData, setFormData] = useState({ maSP: '', tenSP: '', giaBan: '', loaiSP: '', hinhAnh: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProduct = () => {
    if (formData.maSP && formData.tenSP && formData.giaBan) {
      let updatedProducts;
      if (isEditing) {
        updateProduct(editId, formData);
        updatedProducts = products.map(p => p.maSP === editId ? { ...formData } : p);
        setIsEditing(false);
        setEditId(null);
      } else {
        createProduct(formData);
        updatedProducts = [...products, formData];
      }
      setProducts(updatedProducts);
      setProductList(updatedProducts);
      setFormData({ maSP: '', tenSP: '', giaBan: '', loaiSP: '', hinhAnh: '' });
    }
  };

  const handleEditProduct = (product) => {
    setFormData(product);
    setIsEditing(true);
    setEditId(product.maSP);
  };

  const handleDeleteProduct = (maSP) => {
    deleteProduct(maSP);
    const updatedProducts = products.filter(p => p.maSP !== maSP);
    setProducts(updatedProducts);
    setProductList(updatedProducts);
  };

  return (
    <div>
      <div className="modal fade" id="adminModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Admin Control Panel</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <h5>{isEditing ? 'Update Product' : 'Add Product'}</h5>
                <div className="row g-2">
                  <div className="col-md-3">
                    <input type="text" className="form-control" name="maSP" placeholder="Product Code" value={formData.maSP} onChange={handleInputChange} disabled={isEditing} />
                  </div>
                  <div className="col-md-3">
                    <input type="text" className="form-control" name="tenSP" placeholder="Product Name" value={formData.tenSP} onChange={handleInputChange} />
                  </div>
                  <div className="col-md-3">
                    <input type="number" className="form-control" name="giaBan" placeholder="Price" value={formData.giaBan} onChange={handleInputChange} />
                  </div>
                  <div className="col-md-3">
                    <input type="text" className="form-control" name="loaiSP" placeholder="Type" value={formData.loaiSP} onChange={handleInputChange} />
                  </div>
                  <div className="col-md-3">
                    <input type="text" className="form-control" name="hinhAnh" placeholder="Image URL" value={formData.hinhAnh} onChange={handleInputChange} />
                  </div>
                </div>
                <button className="btn btn-primary mt-2" onClick={handleAddProduct}>
                  {isEditing ? 'Update' : 'Add'}
                </button>
                {isEditing && (
                  <button className="btn btn-secondary mt-2 ms-2" onClick={() => { setIsEditing(false); setFormData({ maSP: '', tenSP: '', giaBan: '', loaiSP: '' }); }}>Cancel</button>
                )}
              </div>
              <hr />
              <div className="table-responsive">
                <h5>Product List</h5>
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Ten sp</th>
                      <th>Gia</th>
                      <th>Loai</th>
                      <th>Setting</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.maSP}>
                        <td>{product.maSP}</td>
                        <td>{product.tenSP}</td>
                        <td>{product.giaBan}</td>
                        <td>{product.loaiSP}</td>
                        <td>
                          <button className="btn btn-sm btn-warning me-1" onClick={() => handleEditProduct(product)}>Edit</button>
                          <button className="btn btn-sm btn-danger" onClick={() => handleDeleteProduct(product.maSP)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

export default Admin