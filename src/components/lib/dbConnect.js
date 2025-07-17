
import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNames={
    collegeCollection: 'colleges',
    submissionCollection: 'submissions',
    usersCollection:'users',
    feedbackCollection:'feedbacks',
    
}


export default function dbConnect(collectionName){
const uri = process.env.mongoURI

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

return client.db(process.env.dbName).collection(collectionName)
}



// DB_USER=progresso
// DB_PASSWORD=9v2Az1Ebqp1AAgai
