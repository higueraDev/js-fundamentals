const fs = require("fs");
const data = fs.readFileSync("README.md", "utf8");

const newData = data.replace(/Clone/gi, "COPY");

fs.writeFileSync("README_COPY.md", newData);

console.log(data);
