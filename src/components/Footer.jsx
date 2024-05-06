import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li><Link to="/posts/categories/Software Engineer">Software Engineer</Link></li>
        <li><Link to="/posts/categories/Data Analytics">Data Analytics</Link></li>
        <li><Link to="/posts/categories/Data Science">Data Science</Link></li>
        <li><Link to="/posts/categories/Digital Marketing">Digital Marketing</Link></li>
        <li><Link to="/posts/categories/Product Management">Product Management</Link></li>
        <li><Link to="/posts/categories/Relax Corner">Relax Corner</Link></li>
        <li><Link to="/posts/categories/Uncategorized">Uncategorized</Link></li>
        <li><Link to="/posts/categories/Non-tech Related">Non-tech Related</Link></li>
      </ul>
      <div className="footer__copyright">
        <small>All Rights Reserved &copy; Copyright, General Assembly.</small>
      </div>
    </footer>
  );
};

export default Footer;
