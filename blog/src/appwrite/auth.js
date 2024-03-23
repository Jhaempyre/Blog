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




//This method is creating user account from appwrite function of create and on sucessfull creation it is attempting the login a
//as standard approcah and in failure a message to create account 

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login(email, password);
            } else {
                console.log("Failed to create user account");
            }
        } catch (error) {
            throw error;
        }
    }
//Attempting a login via appwrite service createEmailPasswordSession  
    async login({email},{password}){
       try {
        return await this.account.createEmailPasswordSession(email,password)
       } catch (error) {
        throw error
       }
    }
// getting current user form appwrite on get function 
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error ;             
        }
        //return null (this is happening because after throw no execution you can do with console.log and other statemnet anyway )
    }
// logging out the user by removing sessions 
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