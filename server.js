const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(express.json());

app.post("/submit-blog", (req, res) => {
    const { password, blogTitle, blogContent } = req.body;

    if (password === "passwordForBlog") {
        const submissionDate = new Date().toISOString();
        const blogData = {
            title: blogTitle,
            content: blogContent,
            date: submissionDate
        };

        const blogDataString = JSON.stringify(blogData);

        // Append the blog data to the file
        fs.appendFile("/data/blogs.txt", blogDataString + "\n", err => {
            if (err) {
                console.error(err);
                res.status(500).send("Error storing blog data");
            } else {
                res.status(200).send("Blog submitted successfully!");
            }
        });
    } else {
        res.status(401).send("Incorrect password. Blog submission failed.");
    }
});

app.listen(port, () => {
    console.log(`\nServer is running on port http://localhost:${port}`);       
});
