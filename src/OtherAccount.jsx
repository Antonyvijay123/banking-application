import React, { useState } from 'react';

const Otheraccount = () => {
  const [formData, setFormData] = useState({
    account:'',
    transferType: '',
    amount: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let formErrors = {};

    
    if (!formData.account) {
        formErrors.account= 'Please select an account';
      }
    if (!formData.transferType) {
      formErrors.transferType = 'Please select tranfer type.';
    }

   
    if (!formData.amount || isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
      formErrors.amount = 'Please enter a valid amount.';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Beneficiary Added Successfully');
      
    }
  };

  return (
    <div style={styles.container}>
      <h2>Select Beneficiary</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
  <label>Choose Account:</label>
  <select
    name="account" 
    value={formData.account}
    onChange={handleChange}
    style={styles.input}
  >
    <option value="">Select</option>
    <option value="ACCOUNT 1">ACCOUNT 1</option>
    <option value="ACCOUNT 2">ACCOUNT 2</option>
    <option value="ACCOUNT 3">ACCOUNT 3</option>
  </select>
  {errors.account && <span style={styles.error}>{errors.account}</span>}
</div>

        <div style={styles.formGroup}>
          <label>Transfer Type:</label>
          <select
            name="transferType"
            value={formData.transferType}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select</option>
            <option value="NEFT">NEFT</option>
            <option value="RTGS">RTGS</option>
            <option value="IMPS">IMPS</option>
          </select>
          {errors.transferType && <span style={styles.error}>{errors.transferType}</span>}
        </div>

        <div style={styles.formGroup}>
          <label>Enter Amount:</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.amount && <span style={styles.error}>{errors.amount}</span>}
        </div>

        <button type="submit" style={styles.button}>TRANSFER</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: 'whitesmoke',
    color: 'black',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
};

export default Otheraccount;
