# Commodities Management System - Slooze Frontend

A React-based frontend application for managing commodities with role-based access control.

## Features

- 🔐 **Authentication System**
  - Login with email/password
  - Role-based access control
  - Persistent sessions using localStorage

- 👥 **Role-Based Access**
  - **Manager**: Full access to all features
  - **Store Keeper**: View products only

- 📦 **Product Management**
  - View products list
  - Add new products (Manager only)
  - Edit existing products (Manager only)
  - Delete products (Manager only)
  - Stock level indicators

- 🎨 **UI/UX Features**
  - Light/Dark mode toggle
  - Responsive design
  - Clean, modern interface

- 🛡️ **Route Protection**
  - Automatic redirect for unauthenticated users
  - Role-based route restrictions

## Sample Login Credentials

### Manager Account
- **Email**: manager@slooze.com
- **Password**: manager123
- **Permissions**: Full access to Dashboard, Products, Add/Edit products

### Store Keeper Account
- **Email**: storekeeper@slooze.com
- **Password**: storekeeper123
- **Permissions**: View products only

## Tech Stack

- **Frontend**: React 18
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Storage**: localStorage for persistence
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/commodities-management-slooze-frontend.git
   cd commodities-management-slooze-frontend