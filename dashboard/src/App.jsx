import Content from "@/components/general/Content";
import Footer from "@/components/general/Footer";
import Header from "@/components/general/Header";
import Sidebar from "@/components/general/Sidebar";
import AuthProvider from "@/providers/AuthProvider";
import { RouterProvider, BrowserRouter, Routes, Route } from "react-router";
import About from "@/components/general/About";
import Posts from "./components/post/Posts";
import PageNotFound from "@/components/general/404";
import Post from "@/components/post/Post";
import LoginPage from "@/components/auth/LoginPage";
import Profile from "@/components/user/Profile";
import Dashboard from "./components/user/Dashboard";
import RequireAuth from "./components/utils/RequireAuth";
import PrivateRoute from "./components/utils/PrivateRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <div className="flex flex-col gap-2 m-2 h-dvh">
            <Header />
            <div className="flex gap-2 h-full">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:id" element={<Post />} />
                <Route path="/login" element={<LoginPage />} />

                <Route element={<PrivateRoute />}>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Route>

                {/* <Route
                  path="/profile"
                  element={
                    <RequireAuth>
                      <Profile />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <RequireAuth>
                      <Dashboard />
                    </RequireAuth>
                  }
                /> */}
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
