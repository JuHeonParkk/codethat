import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App.jsx";
import HomePage from "./pages/HomePage.jsx";
import CourseListPage from "./pages/CourseListPage.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";
import QuestionListPage from "./pages/QuestionListPage.jsx";
import QuestionPage from "./pages/QuestionPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="courses">
          <Route index element={<CourseListPage />} />
          <Route path=":courseSlug" element={<CoursePage />} />
        </Route>
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="questions">
          <Route index element={<QuestionListPage />} />
          <Route path=":questionId" element={<QuestionPage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);
