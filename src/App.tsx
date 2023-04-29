import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/Home";
import { createUseStyles } from "react-jss";
import AddBlogPost from "./components/pages/AddBlogPost";
import BlogPage, { blogPageLoader } from "./components/pages/BlogPage";

const useStyles = createUseStyles({
  mainDiv: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addBlogPost",
    element: <AddBlogPost />,
  },
  {
    path: "/blog/:blogID",
    element: <BlogPage />,
    loader: blogPageLoader

  },
]);

const App = () => {
  const styles = useStyles();
  return (
    <div className={styles.mainDiv}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
