import conf from "../conf/conf";
import { Client, Databases, ID , Query, Storage} from "appwrite";


export class Service{

    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,image, status , userId}){
        try {
            return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title , 
                content ,
                image , 
                status , 
                userId,
            }
            )
        } catch (error) {
            console.log("appwrite service error while creating post ", error)
            
        }
    }

    async updatePost(slug,{title,content, image, status}){
        try {
           return  await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                image,
                status
            }
           )
            
        } catch (error) {
            console.log("apprite databse error ", error)
        }
    }

    async deletePost(slug){
            try{
                await this.databases.createDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug
                )
                return true
                
            }
        catch (error) {
            console.log("Appwrite deletionerror",error)
            return false 
        }
    }

    async getPost(slug){
        try {
            await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("apprite geetting error",error)
        }
    }

    async getPosts(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal("status","active")
                ]
            )
            
        } catch (error) {
         console.log("appwrite error while returning data",error)   
        }
    }

    //file upload 
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("problem while creating file",error)
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            
        } catch (error) {
            console.log("app write errror while deleting file",error)
        }

    }
    
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()

export default service