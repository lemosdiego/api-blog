import Blog from "../models/Blog.js";

export const createPost = async (req, res) => {
  try {
    const { title, author, cover_image, summary, content } = req.body;
    if (!title || !author || !content) {
      return res.status(400).json({
        message: "Title, author and content are required",
      });
    }

    const post = await Blog.create({
      title,
      author,
      cover_image,
      summary,
      content,
    });

    return res.status(201).json({ message: "Blog created successfully", post });
  } catch (error) {
    console.error("Erro ao criar Post", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Blog.findAll({
      order: [["createdAt", "DESC"]],
    });
    return res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deletPosts = async (req, res) => {
  try {
    const deletePost = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (deletePost) {
      res.status(200).json({ message: "Post deleted successfully" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(409).json({ message: "Error deleting Post" });
  }
};

export const editPost = async (req, res) => {
  try {
    const [updatedPost] = await Blog.update(
      {
        title: req.body.title,
        author: req.body.author,
        cover_image: req.body.cover_image,
        summary: req.body.summary,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    const post = await Blog.findByPk(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
