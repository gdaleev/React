# BarberShop E-Commerce

# Overview
BarberShop E-Commerce is a **Single-Page Application (SPA)** built with **React** and **Firebase**. 
The platform allows users to browse and purchase barber-related products. Unauthenticated users can explore products, while registered users can manage their orders.

# Features
## Guest Users:
- View available products.
- Add products to the shopping cart.

## Authenticated Users:
- Register and log in using **Firebase Authentication**.
- Place orders and manage them (**Create, Update, Delete**).
- View order history in the **Profile Page**.

## Shopping Experience:
- Add, update, and remove items from the **Cart**.
- Proceed to checkout with an **order confirmation modal**.
- Order details are stored in **Firestore**.

# Architecture
## Front-End:
- **React**: Built as a **SPA** with React.
- **State Management**: Utilizes **Context API** for authentication and cart management.
- **Routing**: Implemented with **React Router** for seamless navigation.
- **Reusable Components**: Components such as **product cards, modals, and forms** enhance modularity.
- **UI/UX**: Standard **HTML and CSS**, with **loaders** for a smoother experience.

## Back-End:
- **Firebase Firestore**: Stores **product data, user orders, and authentication info**.
- **Authentication**: Managed via **Firebase Authentication (email and password)**.
- **CRUD Operations**: Full implementation of **Create, Read, Update, and Delete actions** for orders.

# Security
- **Authentication State Management**: Ensures users only access their own data.
- **Protected Routes**: Restricts access to **authenticated users** where necessary.
- **Data Validation**: Ensures **clean and structured data handling**.
