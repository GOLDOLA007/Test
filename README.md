# 🚀 User Management API - Frontend

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

---

### 📝 Description
A static web client built with **Vanilla HTML, CSS, and JavaScript**. This project 
was specifically designed to consume and validate the 
authentication flows, CORS configurations, and security mechanisms of the 
**User Management API**.

---

### 🌐 Backend API Integration
This client requires the backend services to be up and running to function properly. You can find the backend repository here:

🔗 **[user_api](https://github.com/GOLDOLA007/user_api)**

The application simulates real-world interactions such as user registration, login mechanics, and accessing protected dashboard routes via secure authentication tokens.

---

### ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **Authentication Flow** | Complete Login and Register interfaces integrated with the backend. |
| **Session Management** | Handling of secure token storage and session persistence validation. |
| **Route Protection** | Client-side middleware simulating restricted access for authenticated users. |
| **Responsive UI** | Clean, modern, and fully responsive layout built with pure CSS. |
| **CORS** | Specifically structured to test cross-origin requests |

---

### 🛠️ Tech Stack

* **Structure:** HTML5 (Semantic elements)
* **Styling:** CSS3 (Flexbox/Grid layout, custom responsive design)
* **Scripting:** JavaScript (ES6+, Fetch API for asynchronous requests)
* **Environment:** Static Web Application

---

### 📦 Installation & Setup

1️⃣ **Clone the repository**
```bash
git clone [https://github.com/GOLDOLA007/user_api_frontend.git](https://github.com/GOLDOLA007/user_api_frontend.git)
```

2️⃣ **Configure the API Endpoint**
Open your JavaScript configuration file (e.g., `app.js` or `config.js`)
and ensure the base URL points to your local or hosted backend instance:
```JavaScript
const API_BASE_URL = "http://localhost:8080";
```

3️⃣ **Run the application**
Since this is a static application, you can simply 
open the `index.html` file directly in your browser, 
or serve it using an extension like **Live Server** in VS Code.

### 🛡️ Web Security & Best Practices
- **CORS Handling:** Used as a practical environment to validate and debug Cross-Origin Resource Sharing (CORS) policies defined by the Spring Boot backend.
- **Asynchronous Requests:** Leveraged the native `Fetch API` with proper async/await syntax to handle HTTP requests and gracefully display errors to the end-user.
