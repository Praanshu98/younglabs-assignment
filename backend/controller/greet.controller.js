const greetMessage = (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  return res
    .status(200)
    .json({ message: `Hello ${name}! Welcome to YoungLabs.` });
};

export default greetMessage;
