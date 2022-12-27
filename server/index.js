import Fastify from "fastify";
import dotenv from "dotenv";
import fastifyCors from "@fastify/cors";
import fetchWiki from "./src/fetchWiki.js";

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
    const dictionnary = await fetchWiki();

    return dictionnary;
  }
);

fastify.listen({ port: process.env.PORT || 3000 }, (err, address) => {
  if (err) {
    throw err;
  }
  console.log(`server listening on ${address}`);
});
