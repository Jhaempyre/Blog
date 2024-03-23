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
//while creating post we are emphsising that we write a post by these 
//data as of slug being the unique id nad others title status iamge etc.. the part of it 
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

//updating post for all values slug being id is not gettiing changed anyway     
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
            console.log("apprite databse error at updatePost ", error)
        }
    }
//by nature of deletion of document we inly get boolean result true or false hence true or false is written 
    async deletePost(slug){
            try{
                await this.databases.deleteDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug
                )
                return true
                
            }
        catch (error) {
            console.log("Appwrite deletion error",error)
            return false 
        }
    }
// if the methid runs true it will return an object otherwise will go flase 
    async getPost(slug){
        try {
            await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("apprite geetting post error",error)
            throw error;
        }
    }

//it will genrate the post by querying to database about active post and will get it 

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
         throw error;
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
            console.log("problem while uploading file",error)
        }
    }

//deleting files with uniqueid just 

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
    // from feild id it will return a file preview 
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()

export default service