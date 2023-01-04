import { readFileSync } from "fs";
import { createServer } from "http";
import { join } from "path";

const PORT = 5000;

createServer(async (req, res) => {
  if (req.url === "/favicon.ico") {
    const file = readFileSync(join("src", "public", "favicon.ico"));
    res.write(file);
    res.end();
    return;
  }

  // Check if accessing `css` route
  if (req.url.startsWith("/css")) {
    const route = join("src", req.url);
    const file = readFileSync(route, "utf8");
    if (!file) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ error: "File not found" }, null, 4));
    }

    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(file);
    res.end();
    return;
  }
  // Check if accessing `js` route
  else if (req.url.startsWith("/js")) {
    const route = join("src", req.url);
    const file = readFileSync(route, "utf8");
    if (!file) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ error: "File not found" }, null, 4));
    }

    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.write(file);
    res.end();
    return;
  }
  // Check if accessing `public` route
  else if (req.url.startsWith("/public")) {
    const route = join("src", req.url);
    const file = readFileSync(route, "utf8");
    if (!file) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ error: "File not found" }, null, 4));
    }

    const contentTypes = {
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
    };

    let contentType;

    Object.keys(contentTypes).forEach((extension) => {
      if (route.endsWith(extension)) contentType = contentTypes[extension];
    });

    res.writeHead(200, { "Content-Type": contentType });
    res.write(file);
    res.end();
    return;
  }
  // Else, assume trying to access HTML page
  else {
    // Directory-based routing. All pages are folders with `index.html` inside.
    const route = join("src", "routes", req.url, "index.html");
    const file = await readFileSync(route, "utf8");

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(file);
    res.end();
  }
}).listen(PORT, () =>
  console.log(`Server listening on port http://127.0.0.1:${PORT}`)
);
