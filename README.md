# TechStore 🛒

![TechStore Demo](/assets/techstore.gif)

TechStore is a modern e-commerce application that allows users to browse products, add them to the cart, and complete purchases seamlessly. The application is built using a **monorepo architecture** with **TurboRepo**, featuring a **NestJS backend**, **Next.js frontend**, and **React Native (Expo) mobile app**.

## Features 🚀

- 📦 **Product Listing** - Simple product viewer with detailed descriptions and images.
- 🛒 **Add to Cart** - Users can add/remove products to/from the cart.
- 💳 **Payment Method** - Secure checkout process for completing purchases.
- 📱 **Mobile & Web Support** - Developed for both web (Next.js) and mobile (Expo) platforms.
- ⚡ **Optimized Performance** - TurboRepo ensures efficient and fast development.

## Tech Stack 🛠️

### Backend
- **NestJS** - Backend framework for API and business logic.
- **PostgreSQL** - Database for storing product and order data.
- **Prisma** - ORM for database interaction.

### Frontend
- **Next.js** - Web application for browsing and purchasing products.
- **TailwindCSS** - Styling framework for a responsive UI.

### Mobile
- **Expo** - React Native framework for mobile application.
- **React Native** - Mobile framework for iOS and Android apps.

### Monorepo
- **TurboRepo** - Monorepo tool for efficient code sharing and performance.

## Installation & Setup 🏗️

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Steps to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/vinilima2/tech.store.repo
   cd techstore
   ```
2. Install dependencies:
   ```sh
   yarn install
   ```
3. Start the application:
   ```sh
   cd techstore
   yarn dev
   ```