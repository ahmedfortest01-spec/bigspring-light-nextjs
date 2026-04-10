import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = "content";
const outputDir = "mobile-app/data";

function processDir(dir, relativePath = "") {
  const entries = fs.readdirSync(path.join(dir, relativePath), { withFileTypes: true });
  const data = {};

  for (const entry of entries) {
    const fullPath = path.join(dir, relativePath, entry.name);
    if (entry.isDirectory()) {
      data[entry.name] = processDir(dir, path.join(relativePath, entry.name));
    } else if (entry.name.endsWith(".md")) {
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const { data: frontmatter, content } = matter(fileContent);
      const name = entry.name.replace(".md", "");
      data[name] = { frontmatter, content };
    }
  }
  return data;
}

const allContent = processDir(contentDir);
fs.writeFileSync(path.join(outputDir, "content.json"), JSON.stringify(allContent, null, 2));
console.log("Content migration complete.");
