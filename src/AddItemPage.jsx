import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddItemPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    itemName: "",
    itemPrice: "",
    category: "",
    color: "",
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Item saved successfully!");
    navigate("/"); // العودة إلى صفحة العناصر بعد الحفظ
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Add new item</h1>
      </header>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Item Name<span className="required">*</span></label>
            <input
              type="text"
              name="itemName"
              placeholder="exp: Tulips"
              required
              value={formData.itemName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Item Price<span className="required">*</span></label>
            <input
              type="number"
              name="itemPrice"
              placeholder="exp: $10"
              required
              value={formData.itemPrice}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Choose category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">Select category</option>
              <option value="Bouquets">Bouquets</option>
              <option value="Indoor Plants">Indoor Plants</option>
              <option value="Sunflowers">Sunflowers</option>
            </select>
          </div>
          <div className="form-group">
            <label>Select item colors</label>
            <select
              name="color"
              value={formData.color}
              onChange={handleInputChange}
            >
              <option value="">Select color</option>
              <option value="Red">Red</option>
              <option value="Yellow">Yellow</option>
              <option value="Pink">Pink</option>
            </select>
          </div>
          <div className="form-group">
            <label>Upload item photo</label>
            <input type="file" onChange={handleFileChange} />
          </div>
          <button type="submit" className="save-button">Save</button>
        </form>
      </div>
    </div>
  );
}

export default AddItemPage;
