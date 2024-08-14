import { useEffect, useState } from "react";
import FakeDiv from "../fake/FakeDiv";
import "../admin.css";
import FakeNav from "../fake/FakeNav";

const Admin = () => {
  return (
    <>
      <FakeNav />
      <div className="container">
        <FakeDiv />
        <FakeDiv />
        <FakeDiv />
        <FakeDiv />
        <FakeDiv />
      </div>
    </>
  );
};
export default Admin;
