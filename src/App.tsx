
import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Table, Tag, Button, TableProps } from "antd"; // Assuming you're using Ant Design Table
import { isEditable } from "@testing-library/user-event/dist/utils";
import Introduction from './components/Requirement1';
import Api from './components/Requirement12';
import Dashboard from './layouts/dashboard';
function App() {
  return (
    <div>
      <Api/>
    </div>
  );
}
export default App;
