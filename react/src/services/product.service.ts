import API_URL from "../environment"
import axios from "axios";

export class ProductService {
    defaultPath: string

    constructor(){
        this.defaultPath = API_URL + '/products/'
    }

    async get(){
        return axios.get(this.defaultPath)
    }

    async find(id: string){
        return axios.get(this.defaultPath + id)
    }
}