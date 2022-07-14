import { Client, Databases } from 'appwrite';
const client = new Client();
client
    .setEndpoint('http://localhost/v1') 
    .setProject('<Project Id>');

export const database = new Databases(client, '<database Id>');