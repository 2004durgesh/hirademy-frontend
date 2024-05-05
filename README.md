# Bookstore Frontend Application

Welcome to the Bookstore Frontend Application! This project is a frontend application developed using Next.js, designed to interact with the Softwium Fake API to display a collection of books and their details.

## Features

- Display a list of books with titles and authors.
- View detailed information about each book, including ISBN, page count, and authors.
- Responsive design for seamless viewing on different devices.
- Skeleton loading for improved user experience during data fetching.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/2004durgesh/hirademy-frontend.git
```

2. Navigate to the project directory:

```bash
cd hirademy-frontend
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Technologies Used

- React.js: Frontend JavaScript library for building user interfaces.
- Next.js: React framework for server-side rendering and routing.
- Tailwind CSS: Utility-first CSS framework for styling.
- ShadCN/UI: Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable.

## Folder Structure

- `src/`: Contains and wraps all the other files and folders like app/ and conponents/.
- `app/`: Contains Next.js page components for different routes.
- `components/`: Contains reusable UI components used throughout the application.

## API Integration

This project interacts with the Softwium Fake API to fetch book data. The following endpoints are used:

- GET `/books`: Fetches a list of all books.
- GET `/books/:id`: Fetches details of a specific book by ID.
