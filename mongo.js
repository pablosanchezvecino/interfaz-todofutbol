const { MongoClient } = require('mongodb');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://pablo:1234@cluster0.m2uj4.mongodb.net/test?retryWrites=true&w=majority";


    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

        // Login
        await findByUsernameAndPassword(client, 'paco_RMCF', '1234')

        // Registro
        /*await createListing(client,
            {
                username: "canino_conductor",
                password: "holabuenas",
                favoriteTeams: []
            }
        );*/

        // Añadir equipo a favoritos
        //await addFavorite(client, 'canino_conductor', '99')

        // Eliminar equipo de favoritos
        await deleteFavorite(client, 'canino_conductor', '99')
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);






















async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function findByUsernameAndPassword(client, username, password) {

    const result = await client.db("todofutbol").collection("users").findOne({ username: username, password: password });

    if (result) {
        console.log('Login correcto');
        console.log(result);
        // Aquí se iniciaría sesión
    } else {
        console.log('No se encontró el par (usuario, contraseña)');
        // Aquí seguiríamos en el formulario e informamos 
    }
}

async function createListing(client, newListing) {
    const result = await client.db("todofutbol").collection("users").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function addFavorite(client, username, newFavorite) {
    const result = await client.db("todofutbol").collection("users")
        .updateOne({ username: username }, {
            $push: {
                favoriteTeams: newFavorite
            }
        });

    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

async function deleteFavorite(client, username, favorite) {
    const result = await client.db("todofutbol").collection("users")
        .updateOne({ username: username }, {
            $pull: {
                favoriteTeams: favorite
            }
        });

    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

export{findByUsernameAndPassword};

