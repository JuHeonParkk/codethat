import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App.jsx";
import HomePage from "./pages/HomePage.jsx";
import CourseListPage from "./pages/CourseListPage.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="courses" element={<CourseListPage />} />
        <Route
          path="courses/react-frontend-development"
          element={<CoursePage />}
        />
        <Route path="wishlist" element={<WishlistPage />} />
      </Routes>
    </App>
  </BrowserRouter>,
);
