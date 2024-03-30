import React, { useState } from "react";
import { updateBloodRecordsByAdminEmail } from "../utils/firebaseFunctions";

const UpdateBloodRecordForm = ({ data }) => {
  const [formData, setFormData] = useState(data);
  // console.log(data);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedBloodRecords = [...formData.bloodRecords];
    updatedBloodRecords[index] = {
      ...updatedBloodRecords[index],
      [name]: value,
    };
    setFormData({
      ...formData,
      bloodRecords: updatedBloodRecords,
    });
  };

  const handleSubmit = (e) => {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = today.toLocaleDateString("en-US", options);

    // Update formData with today's date
    const updatedFormData = { ...formData, last_update: formattedDate };

    e.preventDefault();
    console.log(updatedFormData);
    updateBloodRecordsByAdminEmail(updatedFormData.adminEmail, updatedFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <label>
          Last Updated
          <input
            type="text"
            name="last_update"
            value={formData?.last_update}
            onChange={(e) => handleChange(e, "last_update")}
          />
        </label>
      </div>
      {formData?.bloodRecords?.map((bloodRecord, index) => (
        <div key={index}>
          <label>
            Blood Type:
            <input
              type="text"
              name="bloodType"
              value={bloodRecord.bloodType}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              value={bloodRecord.quantity}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
            Availability:
            <input
              type="text"
              name="availability"
              value={bloodRecord.availability}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={bloodRecord.price}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
        </div>
      ))}
      <button type="submit">Update Blood Records</button>
    </form>
  );
};

export default UpdateBloodRecordForm;
