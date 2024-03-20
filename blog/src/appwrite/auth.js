import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class Authservice{
    client = new Client()
    account ; 

    constructor (){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
            this.account = new Account(this.client)

    }


    async createAccount({email},{password},{name}){
        try {
           const userAccout = await this.account.create(ID.unique(), email , password , name )
            if(!userAccout){
                console.log("create user ")
            }
            else {
                return userAccout
            }
            return this.login(email,password)

        } catch (error) {
            throw error ;
        }
    }

    async login({email},{password}){
       try {
        return await this.account.createEmailPasswordSession(email,password)
       } catch (error) {
        throw error
       }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()   
        } catch (error) {
            throw error              
        }
        return null ;   
    }

    async logOutUser(){
        try {
            await this.account.deleteSessions()
            
        } catch (error) {
            
            console.log("The error is here ",error)
        }
        
    }
};

const authService = new Authservice


export default authService