import React from 'react';

const View = () => {
  return(
    <div class="container">
    <h1>Order Id: 1</h1>
    <table class="table table-bordered">
      <thead>
        <th>Name</th>
        <th>Quantity</th>
      </thead>
      <tbody>
        <tr>
          <td>Palak Panner</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Chicken Biryani</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
    <h4>Customer ID:1</h4>
    <h4>Total Price:300</h4>
    <h4>Order Date:2021-11-28</h4>
  </div>
  )
};

export default View;
