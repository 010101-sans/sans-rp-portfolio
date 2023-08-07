const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

// Serve the static files (index.html, CSS, JS, etc.)
app.use(express.static(path.join(__dirname)));

// app.use(express.static("public"));
// app.use(express.json());

// Route handler for handling form submissions
app.post("/submitQuery", (req, res) => {
  const formData = req.body;
  console.log("Received form data :", formData);

  // Convert the form data to a single line string with "___" as a separator
  const queryLine = `${formData.name}___${formData.college}___${
    formData.phone
  }___${formData.subjects.join(",")}___${formData.locations.join(",")}\n`;

  // Write the data to the queries.txt file
  fs.appendFile("./data/queries.txt", queryLine, (err) => {
    if (err) {
      console.error("Error writing data to the file:", err);
      res.send("Error writing data to the file.");
    } else {
      console.log("Data written to the file successfully.");
      res.send("Query submitted successfully!");
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`\nServer is running on http://localhost:${port}`);
});
