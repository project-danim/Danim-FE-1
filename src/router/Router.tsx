import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  CreatePostPage1,
  CreatePostPage2,
  EditingPostPage1,
  EditingPostPage2,
  HomePage,
  NotFoundPage,
  PostPage,
} from "../pages";
import Layout from "../components/common/Layout";
import ScrollToTop from "../utils/ScrollToTop";
import SignUpPage from "../pages/SignUp/SignUpPage";
import LoginPage from "../pages/Login/LoginPage";
import Redirection from "../components/LoginPage/Redirection";
import SignUpForSocialPage from "../pages/SignUp/SignUpForSocialPage";

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 👇 index - 중첩 라우트 구조에서 부모 라우트와 정확히 일치하는 경로를 의미함 */}
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="create-post/step1" element={<CreatePostPage1 />} />
          <Route path="create-post/step2" element={<CreatePostPage2 />} />
          <Route path="edit-post/step1/:id" element={<EditingPostPage1 />} />
          <Route path="edit-post/step2/:id" element={<EditingPostPage2 />} />
          <Route path="post/:id" element={<PostPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="/signup/social" element={<SignUpForSocialPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/api/user/kakao/callback" element={<Redirection />} />

          {/* 👇 존재하지 않는 페이지에 대한 처리 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
