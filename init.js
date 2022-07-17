import { Client, Databases } from 'appwrite';
const client = new Client();
client
    .setEndpoint('http://localhost/v1') 
    .setProject('<project id>');

export const database = new Databases(client, '<database id>');