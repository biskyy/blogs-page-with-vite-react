import { useLoaderData } from "react-router-dom";
import { getBlog } from "./Home";
import DefaultNavbar from "../DefaultNavbar";
import { createUseStyles } from "react-jss";
import ReactMarkdown from "react-markdown";

export const blogPageLoader = ({ params }: any) => {
  return getBlog(params.blogID);
};

const useStyles = createUseStyles({
  mainDiv: {
    backgroundColor: "#212A3E",
    height: "100%",
  },
  blogContainer: {
    margin: "20px",
  },
  blogTitle: {},
  blogContent: {
    whiteSpace: "pre-wrap",
  },
});

const BlogPage = () => {
  const styles = useStyles();

  const blog: any = useLoaderData();
  return (
    <>
      <DefaultNavbar />
      <div className={styles.mainDiv}>
        <div className={styles.blogContainer}>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
