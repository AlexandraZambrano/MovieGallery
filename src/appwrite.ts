import { Client, Databases, ID, Query, Models } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

interface Movie{
    id: number;
    poster_path: string | null;
}

export interface MovieDocument extends Models.Document {
    $id: string;
    searchTerm: string;
    count: number;
    movie_id: number;
    poster_url: string;
}

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);

const database =  new Databases(client);


export const updateSearchCount = async (searchTerm:string, movie:Movie) => {
    try {
        const result = await database.listDocuments<MovieDocument>(DATABASE_ID, COLLECTION_ID, [
            Query.equal('searchTerm', searchTerm),
        ])

        console.log(result, result.documents.length > 0);

        if(result.documents.length > 0) {
            const doc = result.documents[0];
            console.log(doc);
            console.log("es mayor que 0")

            await database.updateDocument<MovieDocument>(DATABASE_ID, COLLECTION_ID, doc.$id, {
                count: doc.count + 1,
            })
        }else{
            await database.createDocument<MovieDocument>(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const getTrendingMovies = async (): Promise<MovieDocument[]> => {
    try {
        const result = await database.listDocuments<MovieDocument>(DATABASE_ID, COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc('count'),
        ])

        return result.documents;
    } catch (error) {
        console.log(error);
        return [];
    }
}