import NavBar from "../NavBar";
import { createUseStyles } from "react-jss";
import { BlogLayout } from "../BlogPost";
import { Form} from "react-router-dom";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

const useStyles = createUseStyles({
  mainDiv: {
    backgroundColor: "#212A3E",
    height: "100%",
  },
  textInput: {
    color: "white",
    borderRadius: "4px",
    border: "1px solid white",
    boxSizing: "border-box",
    maxWidth: "100%",
    resize: "both",
    padding: "0px",
  },
  titleInput: {
    height: "30px",
  },
});

const AddBlogPost = () => {
  const styles = useStyles();

  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const submitedBlog: BlogLayout = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      summary: formData.get("summary") as string,
      date: new Date(),
    };

    fetchAddBlogPost(submitedBlog);
  };

  const fetchAddBlogPost = async (blog: BlogLayout) => {
    await fetch("http://localhost:8080/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: blog.title,
        summary: blog.summary,
        content: blog.content,
        date: blog.date,
      }),
    })
      .then((res) => {
        res.json();
        window.location.reload();
        window.location.pathname = "/";
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles.mainDiv}>
      <NavBar />
      <h1>Add Blog Post</h1>
      <Form
        method="post"
        action="/"
        onSubmit={handleFormSubmit}
        style={{ width: "100%" }}
      >
        <label htmlFor="blogPostTitle">Blog Post Title</label>
        <br />
        <input
          className={`${styles.textInput} ${styles.titleInput}`}
          required={true}
          type="text"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          size={60}
          id="blogPostTitle"
          name="title"
        ></input>
        <br />
        <label htmlFor="blogPostSummary">Blog Post Summary</label>
        <br />
        <textarea
          required={true}
          className={styles.textInput}
          cols={53}
          rows={1}
          id="blogPostContent"
          name="summary"
        ></textarea>
        <br />
        <label htmlFor="blogPostContent">Blog Post Content</label>
        <br />
        <textarea
          required={true}
          className={styles.textInput}
          cols={100}
          rows={10}
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          id="blogPostContent"
          name="content"
        ></textarea>
        <br />
        <button type="submit">Add blog post</button>
      </Form>
      <h1>Preview</h1>
      <hr />
      <div>
        <h1>{blogTitle}</h1>
        <br />
        <ReactMarkdown>{blogContent}</ReactMarkdown>
      </div>
    </div>
  );
};
export default AddBlogPost;
