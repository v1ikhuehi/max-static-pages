const { writeFile, mkdir } = require("fs").promises;
const { join } = require("path");

const createMarkdownFile = async (index) => {
  const content = `
  export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Home ${index}
      </main>
    );
  }
  `;
  const directoryPath = join("app", `file${index}`);
  const fullPath = join(directoryPath, "page.js");

  try {
    // Check if the directory exists, create it if it doesn't
    await mkdir(directoryPath, { recursive: true });
    // Write the file
    await writeFile(fullPath, content, "utf8");
    console.log(`File created: ${fullPath}`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const createMarkdownFiles = async () => {
  const startTime = Date.now();
  try {
    for (let i = 1; i < 5000; i++) {
      await createMarkdownFile(i);
    }
    const endTime = Date.now();
    const elapsedTime = (endTime - startTime) / 1000;
    console.log("elapsedTime", elapsedTime);
    console.log("Markdown files have been created.");
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

createMarkdownFiles();
``;
