import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";
const File = () => {
    return (
        <>
        <div class="container-fluid table-responsive">
      <a href="#update" class="btn btn-light mt-3">UPDATE MENU</a>
      <br /><br />
      <h3>ORDER SUMMARY</h3>

      <table class="table table-bordered">
        <thead>
          <th>Food Item</th>
          <th>Amount</th>
        </thead>
        <tbody>
          <tr>
            <td>item</td>
            <td>amount</td>
            <td><a href="#view" class="btn btn-danger">delete</a></td>
          </tr>
        </tbody>
      </table>
      <a href="/additem" class="btn btn-danger">Add Item</a>
      <a href="/save" class="btn btn-danger">Save</a>
      </div>
        </>
    )
}
export default File;