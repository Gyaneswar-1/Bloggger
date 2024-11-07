export async function searchBlog(req, res) {
    const title = req.body.title;
    
    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }

    console.log(title);
    return res.status(201).json("OK");
}