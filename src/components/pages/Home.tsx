import { createUseStyles } from "react-jss";
import BlogPost, { BlogLayout } from "../BlogPost";
import NavBar from "../NavBar";

const useStyles = createUseStyles({
  mainDiv: {
    backgroundColor: "#212A3E",
    height: "100%",
  },
});

const blogs = await fetch("http://localhost:8080/blogs").then(
  async (res) => await res.json()
);

const blogsArray: BlogLayout[] = [...blogs];

export const getBlog = (blogID: string) =>{
  return blogsArray.find((blog) => blog.id === blogID);
}

const Home = () => {
  const styles = useStyles();
  return (
    <>
      <NavBar />
      <div className={styles.mainDiv}>
        {blogsArray.map((blog, index) => {
          return (
            <BlogPost
              key={index}
              content={blog.content}
              id={blog.id}
              title={blog.title}
              summary={blog.summary}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
