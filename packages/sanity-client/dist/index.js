'use strict';
var client$1 = require('@sanity/client');
// src/config.ts
var projectId = "ktr2zvpc";
var dataset = "production";
var apiVersion = "2024-04-04";
var client = client$1.createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: apiVersion,
    useCdn: true
});
var trainingClient = client$1.createClient({
    projectId: projectId,
    dataset: "training",
    apiVersion: apiVersion,
    useCdn: true
});
var centroClient = client$1.createClient({
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
exports.angeboteQuery = angeboteQuery;
exports.apiVersion = apiVersion;
exports.centroClient = centroClient;
exports.client = client;
exports.dataset = dataset;
exports.heilbegleitungQuery = heilbegleitungQuery;
exports.homepageQuery = homepageQuery;
exports.preiseQuery = preiseQuery;
exports.projectId = projectId;
exports.retreatsQuery = retreatsQuery;
exports.trainingClient = trainingClient;
