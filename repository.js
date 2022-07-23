const sdk = require('node-appwrite');
const axios = require('axios');
require('dotenv').config();

const client = new sdk.Client();

client
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject(process.env.PROJECTID) // Your project ID
    .setKey(process.env.APIKEY); // Project API KEY

const database = new sdk.Databases(client, process.env.DATABASEID);

async function getComments(){
    try{
        const response = await axios.get('https://dummyjson.com/comments?limit=340');
        return response.data.comments.map(x => x.body);
    }catch(e){
        console.log(e.message);
  }
};

async function populateDatabase(){
    try{
        const comments = await getComments();
        comments.forEach(async (element) => {
            try{
                await database.createDocument(process.env.COLLECTIONID, 'unique()', {'comments': element})
            }
            catch(e){
                console.log(e.message)
            }
        });
    }catch(e){
        console.log(e.message);
    }
    
}
     
populateDatabase();