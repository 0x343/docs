const styleTag = document.createElement("style");
styleTag.innerHTML = `
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', sans-serif;
      background: #fff;
      color: #222;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    nav {
      background: #f0f0f0;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    nav .nav-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    nav h1 {
      font-size: 24px;
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
    }

    nav ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 15px;
    }

    nav ul li a {
      color: #333;
      text-decoration: none;
      font-weight: 500;
    }

    .container {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 20px;
    }

    main {
      flex: 1;
    }

    .section {
  background: #f9f9f9;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    .section h2 {
      color: #222;
      margin-bottom: 10px;
    }

    h3 {
      color: #2b6cb0;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }

    footer {
      width: 100%;
      max-width: 1400px;
  background: #f0f0f0;
  padding: 20px;
  border-top: 1px solid #ddd;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
    }

    .social-icons a {
      color: #555;
      margin-left: 15px;
      font-size: 18px;
      text-decoration: none;
    }

    /* Mobile Styles */
    @media (max-width: 767px) {
      .menu-toggle {
        display: block;
      }

      nav ul {
        display: none;
      }

      nav ul.active {
        display: flex;
      }
    }

    /* Desktop Styles */
    @media (min-width: 768px) {
  body {
    flex-direction: row;
  }

  nav {
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }

  .container {
        margin-left: 250px;
        padding: 30px;
        max-width: calc(100% - 250px);
  }

  .menu-toggle {
    display: none !important;
  }

  nav ul {
    display: flex !important;
    flex-direction: column;
  }
}

    table {
  width: 100%;
  max-width: 100%;
  font-size: 0.9rem;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #e2e8f0;
  padding: 1rem;
  text-align: left;
}
th {
  background: #2b6cb0;
  color: #fff;
}
tr:hover {
  background: #f1f5f9;
}

.nav-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.nav-buttons button {
  padding: 6px 20px;
  font-size: 12px;
  background: #333333;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}

.nav-buttons button:hover {
  background: #999999;
  color: #000000;
}

.btn-copy {
      padding: 6px 20px;
      font-size: 12px;
      background-color: #2b6cb0;
      color: #fff;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      margin-top: 0.5rem;
    }
    .btn-copy:hover {
      background: #1e4976;
      color: #fff;
    }

      code {
    color: #ff5c85;
    padding: 1rem;
    border-radius: 6px;
      }
`;
document.head.appendChild(styleTag);