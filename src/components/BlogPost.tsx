import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

export interface BlogLayout {
  title: string;
  summary: string;
  content: string;
  _id?: string;
  date: Date;
}

const useStyles = createUseStyles({
  blogPost: {
    display: "flex",
    minHeight: "75px",
    backgroundColor: "#394867",
  },
  blogPostContainer: { margin: "20px", width: "100%", overflow: "hidden" },
  blogTxt: {
    margin: "0px",
    whiteSpace: "normal",
    wordWrap: "break-word",
  },
  link: {
    "&:hover": {
      opacity: 0.5,
    },
    textDecoration: "none",
    color: "inherit",
  },
});

const BlogPost = (blog: BlogLayout) => {
  const styles = useStyles();
  return (
    <div style={{margin: "20px"}}>
      <Link to={`/blog/${blog._id}`} className={styles.link}>
        <div className={styles.blogPost}>
          <div className={styles.blogPostContainer}>
            <h2 className={styles.blogTxt}>{blog.title}</h2>
            <p className={styles.blogTxt}>{blog.summary}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPost;
