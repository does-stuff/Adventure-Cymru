import { readFileSync } from "fs";
import { createServer } from "http";
import { join } from "path";

const PORT = 5000;

const server = createServer(async (req, res) => {
  try {
    if (req.url.startsWith("/css"))
      return await getFileFromFolder(res, req.url, "text/css");
    else if (req.url.startsWith("/public"))
      return await getFileFromFolder(res, req.url, "image");
    else if (req.url.startsWith("/js"))
      return await getFileFromFolder(res, req.url, "text/javascript");

    const route = parseRouteToHTML(req.url);
    const file = await readFileSync(join("src", "routes", route));
    res.setHeader("Content-Type", "text/html");
    res.write(file);
    res.end();
  } catch (e) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(404, "NOT_FOUND");
    res.end(
      JSON.stringify(
        {
          error: 404,
          message: `Route \`${req.url}\` not found on the server.`,
        },
        null,
        2
      )
    );
  }

  res.end();
}).listen(PORT);

function parseRouteToHTML(route) {
  // If index page
  if (route === "/") return "index.html";

  // Remove slash prefix
  route = route.substr(1);

  // IF route already ends with HTML (for whatever reason), return that alone
  if (route.endsWith(".html")) return route;

  // Add HTML to the end for file type
  return route + ".html";
}

async function getFileFromFolder(res, url, type) {
  const route = join("src", url);
  const file = await readFileSync(route);
  res.setHeader("Content-Type", type || "text/plain");
  res.end(file);
  return file;
}
