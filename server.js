import { readFileSync } from "fs";
import { createServer } from "http";
import { join } from "path";

const PORT = 5000;

createServer(async (req, res) => {
  try {
    // Routes
    let route = join("src", "routes", req.url === "/" ? "index" : req.url);
    route = route.endsWith(".html") ? route : route + ".html";
    let file = await readFileSync(route);
    file = !file ? readFileSync(join(route.substring(5), "index.html")) : file;
    res.setHeader("Content-Type", "text/html");
    res.end(file);
  } catch (e) {
    res.end(e.message);
  }
}).listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));

// createServer(async (req, res) => {
//   try {
//     if (req.url.startsWith("/css"))
//       return await getFileFromFolder(res, req.url, "text/css");
//     else if (req.url.startsWith("/public"))
//       return await getFileFromFolder(res, req.url, "image");
//     else if (req.url.startsWith("/js"))
//       return await getFileFromFolder(res, req.url, "text/javascript");

//     const route = parseRouteToHTML(req.url);
//     console.log(join("src", "routes", route));
//     let file = await readFileSync(join("src", "routes", route) + ".html");
//     file = file;
//     // ? file
//     // : await readFileSync(join("src", "routes", route, "index.html"));

//     res.setHeader("Content-Type", "text/html");
//     res.write(file);
//     res.end();
//   } catch (e) {
//     res.setHeader("Content-Type", "application/json");
//     res.writeHead(404, "NOT_FOUND");
//     res.end(
//       JSON.stringify(
//         {
//           error: 404,
//           message: `Route \`${req.url}\` not found on the server.`,
//         },
//         null,
//         2
//       )
//     );
//   }

//   res.end();
// }).listen(PORT, () => {
//   console.log(`Listening at http://localhost:${PORT}`);
// });

// function parseRouteToHTML(route) {
//   // If index page
//   if (route === "/") return "index";

//   // Remove slash prefix
//   route = route.substr(1);

//   // IF route already ends with HTML (for whatever reason), return that alone
//   if (route.endsWith(".html")) return route.substr(5);

//   // Add HTML to the end for file type
//   return route;
// }

// async function getFileFromFolder(res, url, type) {
//   const route = join("src", url);
//   const file = await readFileSync(route);
//   res.setHeader("Content-Type", type || "text/plain");
//   res.end(file);
//   return file;
// }
