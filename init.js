import { Client, Databases } from 'appwrite';
const client = new Client();
client
    .setEndpoint('http://localhost/v1') 
    .setProject('62cfd79665a5474f17f8');

export const database = new Databases(client, '62cfdb9aac8ee3e726eb');