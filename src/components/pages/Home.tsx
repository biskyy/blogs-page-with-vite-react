import { createUseStyles } from "react-jss";
import BlogPost, { BlogLayout } from "../BlogPost";
import DefaultNavbar from "../DefaultNavbar";
import { useLoaderData } from "react-router-dom";

const useStyles = createUseStyles({
  mainDiv: {
    backgroundColor: "#212A3E",
    height: "100%",
  },
});

const sortArrayByDate = (a: any, b: any) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
};

const blogs = await fetch("http://localhost:8080/blogs").then(
  async (res) => await res.json()
);

export const getBlog = async (blogID: string) => {
  return [...blogs].find((blog: any) => blog._id === blogID);
};

export const homePageLoader = async () => {
  const blogsArray: BlogLayout[] = [...blogs].sort(sortArrayByDate);
  return blogsArray;
};

const Home = () => {
  const styles = useStyles();
  const blogsArray: any = useLoaderData();

  return (
    <>
      <DefaultNavbar />
      <div className={styles.mainDiv}>
        {blogsArray.map((blog: BlogLayout, index: number) => {
          return (
            <BlogPost
              key={index}
              content={blog.content}
              _id={blog._id}
              title={blog.title}
              summary={blog.summary}
              date={blog.date}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
