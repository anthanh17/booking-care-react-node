import express from "express";

let configViewEngine = (app) => {
  // config static file
  app.use(express.static("./src/public"));
  // config ejs view engine
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

module.exports = configViewEngine;
