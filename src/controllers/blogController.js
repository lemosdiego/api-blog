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
