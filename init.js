import { Client, Databases } from 'appwrite';
const client = new Client();
client
    .setEndpoint('http://localhost/v1') 
    .setProject(process.env.PROJECTID);

export const database = new Databases(client, process.env.DATABASEID);