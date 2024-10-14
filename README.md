# DevBills 💼💻

**DevBills** is a full-stack application designed to manage and track personal finances. It includes a backend API built with **Node.js** and **TypeScript** and a responsive frontend interface using **React** and **Vite**. The project provides a seamless way to visualize, manage, and track financial data with dynamic charts and detailed forms.

## 🌐 Project Links
- **Repository**: [github.com/sergioscker/dev-bills](https://github.com/sergioscker/dev-bills)
- **Backend**: Available via **Express.js** and **MongoDB**.
- **Frontend**: Built using **React** and TypeScript.

---

## 📦 Technologies Used

### Backend (API)
The backend of **DevBills** was developed with **Node.js** and **TypeScript** and includes the following libraries:

- **Express**: Framework for API routes and middleware.
- **Mongoose**: For seamless MongoDB integration.
- **Zod**: Schema validation and error handling.
- **CORS**: Handling Cross-Origin Resource Sharing for secure API consumption.
- **Http-status-codes**: To standardize HTTP responses.
- **Dotenv**: For managing environment variables and secrets.

### Frontend (Interface)
The **DevBills** frontend was built using **React** with **Vite** for fast development and TypeScript support. Key technologies include:

- **React Hook Form + Zod**: Efficient form creation and validation.
- **Styled-components**: CSS-in-JS for creating flexible, reusable UI components.
- **React Input Mask + Number Format**: To handle complex input fields such as currency and masked data.
- **Day.js**: Date manipulation and formatting.
- **Nivo (Bar + Pie Charts)**: Visual representation of financial data through dynamic charts.
- **Radix UI Dialog**: Accessible and highly customizable modal dialogs.

---

## ⚙️ Features

### API
The **DevBills API** provides the following functionalities:

1. **User Management**: Register and authenticate users via JWT tokens.
2. **Data Validation**: Input validation through **Zod** to ensure secure and correct data handling.
3. **Financial Record Management**: CRUD operations for managing user bills, income, and expense records.
4. **Cross-Origin Resource Sharing (CORS)**: Ensures secure consumption of the API across different platforms.

### Interface
The **DevBills** interface provides a highly responsive, intuitive user experience, with the following features:

1. **Form Handling**: Using **React Hook Form** with **Zod**, forms are fast, with seamless validation and error management.
2. **Dynamic Financial Visualization**: With **Nivo** charting libraries, users can visualize their expenses, income, and bills using pie and bar charts.
3. **Currency Input Masking**: Handles numeric and formatted inputs for financial data like amounts and percentages.
4. **Modular Design**: Built with **Styled-components**, ensuring reusable and customizable components across the application.
5. **Responsive Design**: The layout is fully responsive and adjusts perfectly to any screen size, ensuring a smooth experience on mobile, tablet, or desktop.

---

## 🛠️ How to Run the Project Locally

### Prerequisites
- **Node.js** installed.
- **MongoDB** instance or another database for data storage.

### Clone the Repository
```bash
git clone https://github.com/sergioscker/dev-bills.git
cd dev-bills
```

### Backend Setup (API)
1. Install dependencies:
   ```bash
   cd devbills-api
   npm install
   ```
2. Create a `.env` file and set up the required environment variables:
   ```bash
   MONGO_URI=<your MongoDB connection>
   JWT_SECRET=<your JWT secret>
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup (Interface)
1. Install dependencies:
   ```bash
   cd devbills-interface
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```

### Build for Production
To generate the optimized build for production:
```bash
npm run build
```

---

## 🚀 Deployment

### Backend
The backend is built in **Node.js** with **Express** and deployed using **TypeScript** for type safety and reliability. It supports the following features:
- **User Authentication**: Secure authentication with **JWT tokens**.
- **MongoDB**: Used for storing user records and financial data.
- **Environment Variables**: Managed via **dotenv** for secure configuration in production.

### Frontend
The frontend is deployed using **Vite**, offering a fast and efficient build process, and includes:
- **TypeScript Support**: Ensuring type safety and easier debugging.
- **Nivo for Charts**: Dynamic and responsive chart rendering for financial visualization.
- **Responsive Design**: Optimized for all device types and screen sizes.

---

## 🎉 Conclusion

Developing **DevBills** has been a fulfilling experience, from building a solid and scalable backend to creating an intuitive and responsive user interface. The use of **TypeScript** across the full stack allowed for better type safety and maintainability. Additionally, leveraging libraries such as **React Hook Form**, **Zod**, and **Nivo** has enhanced the user experience with real-time validation and beautiful visual representations of financial data.

Feel free to explore the project by cloning the repository and running it locally or by contributing through GitHub. Your feedback and contributions are welcome!

---

## 📝 License
This project is licensed under the **ISC** license.

---

Made with ❤️ by [Sérgio Oliveira](https://github.com/sergioscker) 👨‍💻
```

---

### Explanation of Formatting for GitHub:

- **Headings**: Highlight sections with `#` for better organization.
- **Code Blocks**: The triple backticks (```) help make code snippets readable.
- **Lists**: Bullet points (`-`) and ordered lists (`1.`) to break down instructions clearly.
- **Links**: To add links, use the `[Link Text](URL)` format.
- **Emojis**: Used to add a bit of personality and engagement to the text.

You can copy and paste this Markdown into your README.md file on GitHub.
