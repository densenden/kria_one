import { createClient } from '@sanity/client';
// src/config.ts
var projectId = "ktr2zvpc";
var dataset = "production";
var apiVersion = "2024-04-04";
var client = createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: apiVersion,
    useCdn: true
});
var trainingClient = createClient({
    projectId: projectId,
    dataset: "training",
    apiVersion: apiVersion,
    useCdn: true
});
var centroClient = createClient({
    projectId: projectId,
    dataset: "centro",
    apiVersion: apiVersion,
    useCdn: true
});
// src/queries.ts
var retreatsQuery = '*[_type == "retreat"] | order(startDate asc)';
var heilbegleitungQuery = '*[_type == "heilbegleitung"]';
var angeboteQuery = '*[_type == "angebot"]';
var preiseQuery = '*[_type == "preis"]';
var homepageQuery = '*[_type == "homepage"][0]';
export { angeboteQuery, apiVersion, centroClient, client, dataset, heilbegleitungQuery, homepageQuery, preiseQuery, projectId, retreatsQuery, trainingClient };
