import express from "express";
import path from "path";
import fs from "fs";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import MainApp from "./src/client/App.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname + '/dist')));

function ignoreFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({nope: true});
  } else {
    next();
  }
}

app.use(ignoreFavicon);

app.get("/*", (req, res, next) => {
  console.log(`${req.url}`);
  const context = {}
  const appHTML = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
          <MainApp />
      </StaticRouter>
  );
  // console.log(`${context}`)
  
  const indexFile = path.resolve(__dirname + '/dist/index.html');
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    if (context.status === 404) {
      res.status(404);
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`));
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app