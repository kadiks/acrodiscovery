import Fastify from "fastify";
import dotenv from "dotenv";
import fastifyCors from "@fastify/cors";
import fetchWiki from "./api/fetchWiki.js";

dotenv.config();

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyCors, {
  origin: "*",
});

fastify.get("/", async (request, response) => {
  response.type("application/json");
  response.send({
    appName: "AcroDiscovery",
    version: "0.1.0",
  });
});

fastify.get(
  "/api/vendors/notion/databases/glossary",
  async (request, response) => {
    return fetchWiki(request, response);
  }
);

fastify.listen({ port: process.env.PORT || 3000 }, (err, address) => {
  if (err) {
    throw err;
  }
  console.log(`server listening on ${address}`);
});

export default fastify;
