const fs = require("fs");
const content = fs.readFileSync("README.md", "utf8");

const wordCount = content.split(" ").length;
console.log(wordCount);

const backTicksCount = content.match(/\`/gi).length;
console.log(backTicksCount);
