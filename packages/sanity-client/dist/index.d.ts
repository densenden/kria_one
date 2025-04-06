import * as _sanity_client from '@sanity/client';

declare const projectId = "ktr2zvpc";
declare const dataset = "production";
declare const apiVersion = "2024-04-04";
declare const client: _sanity_client.SanityClient;
declare const trainingClient: _sanity_client.SanityClient;
declare const centroClient: _sanity_client.SanityClient;

interface SanityDocument {
    _id: string;
    _type: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
}
interface Retreat extends SanityDocument {
    _type: 'retreat';
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    price: number;
    location: string;
    image?: {
        _type: 'image';
        asset: {
            _ref: string;
            _type: 'reference';
        };
    };
}
interface Heilbegleitung extends SanityDocument {
    _type: 'heilbegleitung';
    title: string;
    description: string;
    duration: string;
    price: number;
    image?: {
        _type: 'image';
        asset: {
            _ref: string;
            _type: 'reference';
        };
    };
}
interface Angebot extends SanityDocument {
    _type: 'angebot';
    title: string;
    description: string;
    duration: string;
    price: number;
    image?: {
        _type: 'image';
        asset: {
            _ref: string;
            _type: 'reference';
        };
    };
    features?: string[];
}
interface Preis extends SanityDocument {
    _type: 'preis';
    title: string;
    amount: number;
    description?: string;
    features?: string[];
}
interface Homepage extends SanityDocument {
    _type: 'homepage';
    title: string;
    description: string;
    heroImage?: {
        _type: 'image';
        asset: {
            _ref: string;
            _type: 'reference';
        };
    };
}

declare const retreatsQuery = "*[_type == \"retreat\"] | order(startDate asc)";
declare const heilbegleitungQuery = "*[_type == \"heilbegleitung\"]";
declare const angeboteQuery = "*[_type == \"angebot\"]";
declare const preiseQuery = "*[_type == \"preis\"]";
declare const homepageQuery = "*[_type == \"homepage\"][0]";
type RetreatsResult = Retreat[];
type HeilbegleitungResult = Heilbegleitung[];
type AngeboteResult = Angebot[];
type PreiseResult = Preis[];
type HomepageResult = Homepage;

export { type Angebot, type AngeboteResult, type Heilbegleitung, type HeilbegleitungResult, type Homepage, type HomepageResult, type Preis, type PreiseResult, type Retreat, type RetreatsResult, type SanityDocument, angeboteQuery, apiVersion, centroClient, client, dataset, heilbegleitungQuery, homepageQuery, preiseQuery, projectId, retreatsQuery, trainingClient };
