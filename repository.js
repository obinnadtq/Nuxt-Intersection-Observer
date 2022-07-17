const sdk = require('node-appwrite');
const axios = require('axios');

const client = new sdk.Client();

client
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('62d36c0cbd6d0e15affe') // Your project ID
    .setKey('abd71d11ce0858a4ee1e0dcce5e4848888584367b427b9d8b8c83769cf685378e310b9fdc649df07f463819c1e26a618e06ed4fb73ad3252a4f775d1d2e8b99c88128704a9395cd7745d54e9dbd71d8a90e622efbaf29e7b8743b525bc5c5c4ae753fa478f5da673005b47f7747723fb3bdc5a2fdf471144e06c09cdb0097c9d');

const database = new sdk.Databases(client, '62d36d462990622ecdfb');

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
                await database.createDocument('62d36f2cd7fc67051005', 'unique()', {'comments': element})
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