// INSERTING DOCUMENT/DOCUMENTS

// const { MongoClient } = require('mongodb')
// require('dotenv').config()

// const uri = process.env.MONGO_URI
// const client = new MongoClient(uri)

// const dbname = 'bank'
// const collection_name = 'accounts'
// const accountsCollection = client.db(dbname).collection(collection_name)

// const connectToDatabase = async () => {
//     try{
//         await client.connect()
//         console.log(`Connected to the ${dbname} database \nFull connection string: ${uri}`)
//     }catch (err) {
//         console.error(`Error connecting to the database: ${err}`)
//     }
// }

// const sampleAccounts = [
//     {
//         account_holder: 'James Bond',
//         account_id: 'MD8829001338',
//         account_type: 'checking',
//         lbalance: 25000,
//     },
//     {
//         account_holder: 'Jerry Martins',
//         account_id: 'MD8829001339',
//         account_type: 'savings',
//         balance: 50000,
//     }
// ]

// const insertDocs = async (docs_array) => {
//     return accountsCollection.insertMany(docs_array)
// }

// const main = async () => {
//     try {
//         await connectToDatabase()
//         const result = await insertDocs(sampleAccounts)
//         console.log(`Inserted ${result.insertedCount} documents`)
//         console.log(result)
//     }catch (err) {
//         console.error(`Error inserting documents: ${err}`)
//     }finally {
//         await client.close()
//     }
// }

// main()




// QUERYING MONGODB COLLECTION IN NODE.JS

// const { MongoClient } = require('mongodb')
// require('dotenv').config()

// const uri = process.env.MONGO_URI
// const client = new MongoClient(uri)

// const dbname = 'bank'
// const collection_name = 'accounts'
// const accountsCollection = client.db(dbname).collection(collection_name)

// const connectToDatabase = async () => {
//     try{
//         await client.connect()
//         console.log(`Connected to the ${dbname} database \nFull connection string: ${uri}`)
//     }catch (err) {
//         console.error(`Error connecting to the database: ${err}`)
//     }
// }

// const documentsToFind = { balance: {$gt: 4700} }


// const main = async () => {
//     try {
//         await connectToDatabase()
//         const result = accountsCollection.find(documentsToFind)
//         let docCount = accountsCollection.countDocuments(documentsToFind)
//         for await (let doc of result) {
//             console.log(doc)
//         }
//         console.log(`Found ${await docCount} accounts`)
//     }catch (err) {
//         console.error(`Error finding documents: ${err}`)
//     }finally {
//         await client.close()
//     }
// }

// main()



//  Updating single Documents in Node.js Applications

// const { ObjectId } = require('mongodb')
// const { MongoClient } = require('mongodb')
// require('dotenv').config()

// const uri = process.env.MONGO_URI
// const client = new MongoClient(uri)

// const dbname = 'bank'
// const collection_name = 'accounts'
// const accountsCollection = client.db(dbname).collection(collection_name)

// const connectToDatabase = async () => {
//     try{
//         await client.connect()
//         console.log(`Connected to the ${dbname} database \nFull connection string: ${uri}`)
//     }catch (err) {
//         console.error(`Error connecting to the database: ${err}`)
//     }
// }

// // document to be updated
// const documentToUpdate = { _id: new ObjectId('6452d97e0124b3bd53bb132d') }

// //operation(s) to perform on the above document
// const update = {$inc: {balance: 100}}

// const main = async () => {
//     try {
//         await connectToDatabase()
//         const result = await accountsCollection.updateOne(documentToUpdate, update)
//         result.modifiedCount == 1
//             ? console.log('Updated one document')
//             : console.log('No document was updated')
//     }catch (err) {
//         console.error(`Error Updating documents: ${err}`)
//     }finally {
//         await client.close()
//     }
// }

// main()



//  Updating multiple Documents in Node.js Applications

// const { MongoClient } = require('mongodb')
// require('dotenv').config()

// const uri = process.env.MONGO_URI
// const client = new MongoClient(uri)

// const dbname ='bank'
// const collection_name = 'accounts'
// const accountsCollection = client.db(dbname).collection(collection_name);

// const connectToDatabase = async () => {
    
//     try{
//         await client.connect()
//         console.log(`Connected to the ${dbname} database \nFull connection string: ${uri}`)
//     }catch (err) {
//         console.error(`Error connecting to the database: ${err}`)
//     }
// }


// const documentsToUpdate = { account_type: "checking" };

// const update = { $push: { transfers_complete: "TR413308000" } }

// const main = async () => {
//   try {
//     await connectToDatabase()
//     let result = await accountsCollection.updateMany(documentsToUpdate, update)
//     result.modifiedCount > 0
//       ? console.log(`Updated ${result.modifiedCount} documents`)
//       : console.log("No documents updated")
//   } catch (err) {
//     console.error(`Error updating documents: ${err}`)
//   } finally {
//     await client.close()
//   }
// }

// main()



// Deleting one Document in Node.js 

// const { MongoClient } = require('mongodb')
// require('dotenv').config()

// const uri = process.env.MONGO_URI
// const client = new MongoClient(uri)

// const dbname = "bank"
// const collection_name = "accounts"

// const connectToDatabase = async () => {
    
//     try{
//         await client.connect()
//         console.log(`Connected to the ${dbname} database \nFull connection string: ${uri}`)
//     }catch (err) {
//         console.error(`Error connecting to the database: ${err}`)
//     }
// }

// const accountsCollection = client.db(dbname).collection(collection_name)

// const documentToDelete = { _id: ObjectId("62d6e04ecab6d8e13049749c") }

// const main = async () => {
//   try {
//     await connectToDatabase()
//     let result = await accountsCollection.deleteOne(documentToDelete)
//     result.deletedCount === 1
//       ? console.log("Deleted one document")
//       : console.log("No documents deleted")
//   } catch (err) {
//     console.error(`Error deleting documents: ${err}`)
//   } finally {
//     await client.close()
//   }
// }

// main()


// Deleting many Documents in Node.js 

// const { MongoClient } = require('mongodb')
// require('dotenv').config()

// const uri = process.env.MONGO_URI
// const client = new MongoClient(uri)

// const dbname = "bank"
// const collection_name = "accounts"

// const connectToDatabase = async () => {
    
//     try{
//         await client.connect()
//         console.log(`Connected to the ${dbname} database \nFull connection string: ${uri}`)
//     }catch (err) {
//         console.error(`Error connecting to the database: ${err}`)
//     }
// }

// const accountsCollection = client.db(dbname).collection(collection_name)

// const documentsToDelete = { _id: ObjectId("62d6e04ecab6d8e13049749c") }

// const main = async () => {
//   try {
//     await connectToDatabase()
//     let result = await accountsCollection.deleteMany(documentsToDelete)
//     result.deletedCount === 1
//       ? console.log("Deleted one document")
//       : console.log("No documents deleted")
//   } catch (err) {
//     console.error(`Error deleting documents: ${err}`)
//   } finally {
//     await client.close()
//   }
// }

// main()




// Creating MongoDB Transactions in Node.js Applications

const { MongoClient } = require('mongodb')
require('dotenv').config()

const uri = process.env.MONGO_URI
const client = new MongoClient(uri)

//Collections
const accounts = client.db('bank').collection('accounts')
const transfers = client.db('bank').collection('transfers')

//Account information
let account_id_sender = 'MD574189300'
let account_id_receiver = 'MD8343652528'
let transaction_amount = 100

//Start the client session
const session = client.startSession()

//use withTransaction to start a transaction, execute the callback, and commit the transaction
//The callback for withTransaction must be async/await
//Note: Each individual operation must be awaited and have the session passed in as an argument
const main = async () => {
    try {
        const transactionResults = await session.withTransaction( async () => {
            // step 1: update the account sender balance
            const updateSenderResults = await accounts.updateOne(
                { account_id: account_id_sender },
                { $inc: { balance: -transaction_amount} },
                { session }
            )
            console.log(
                `${updateSenderResults.matchedCount} document(s) matched this filter, updated ${updateSenderResults.modifiedCount} document(s) for the sender account`
            )

            // step 2: update the receiver account balance
            const updateReceiverResults = await accounts.updateOne(
                { account_id: account_id_receiver },
                { $inc: {balance: transaction_amount} },
                { session }
            )
            console.log(
                `${updateReceiverResults.matchedCount} document(s) matched the filter, updated ${updateReceiverResults.modifiedCount} document(s) for the receiver account`
            )

            // step 3: Insert the transfer document
            const transfer = {
                transfer_id: 'TR21872187',
                amount: transaction_amount,
                from_account: account_id_sender,
                to_account: account_id_receiver,
            }

            const inserTransferResults = await transfers.insertOne( transfer, {session} )
            console.log(
                `Successfully inserted ${inserTransferResults.insertedId} into the transfers collection`
            )

            // step 4: update the transfers_comlete field for the sender account
            const updateSenderTransferResults = await accounts.updateOne(
                { account_id: account_id_sender },
                { $push: { transfers_complete: transfer.transfer_id } },
                {session}
            )
            console.log(
                `${updateSenderTransferResults.matchedCount} document(s) matched in the transfers collection, updated ${updateSenderTransferResults.modifiedCount}`
            )

            // step 5: update the transfers_complete field for the receiver account
            const updateReceiverTransferResults = await accounts.updateOne(
                {account_id: account_id_receiver},
                {$push: { transfers_complete: transfer.transfer_id } },
                {session}
            )
            console.log(
                `${updateReceiverTransferResults.matchedCount} document(s) matched in the transfers collection, updated ${updateReceiverTransferResults.modifiedCount}`
            )
        })

        console.log('Commiting trasaction ...')

        // If the callback for withTransaction returns succesfully without throwing an error, the trasaction will be committed
        if (transactionResults) {
            console.log('The reservation was succesfully created.')
        }else {
            console.log('The transaction was intentionally aborted.')
        }
        
    }catch(err) {
        console.error(`Transaction aborted: ${err}`)
        process.exit(1)
    }finally {
        await session.endSession()
        await client.close()
    }
}

main()