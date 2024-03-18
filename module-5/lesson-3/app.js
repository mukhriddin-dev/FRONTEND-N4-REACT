"use strict";
import {$} from "./utils/index.js";

let BaseURL = "http://localhost:8080";

const requestPosts = {
    getPosts: async function getPosts(endPoint, params) {
        try {
            if (endPoint.trim()) {
                const response = await fetch(`${BaseURL}/${endPoint}${params ? params : ""}`);
                const data = await response.json();
                return data;
            }
        } catch (error) {
            console.log("Error message: ", error);
        }
    },
    createPost: async function createPost(endPoint, data) {
        try {
            if (endPoint.trim() && Object.keys(data).length) {
                const response = await fetch(`${BaseURL}/${endPoint}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                return response.json();
            }
        } catch (error) {
            console.log("Error message: ", error);
        }
    },
    updatePost: async function updatePost(endPoint, id, data) {
        console.log(endPoint, id, data);
        try {
            if (endPoint.trim() && Object.keys(data).length) {
                const response = await fetch(`${BaseURL}/${endPoint}/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                return response.json();
            }
        } catch (error) {
            console.log("Error message: ", error);
        }
    },
    deletePost: async function deletePost(endPoint, id) {
        try {
            if (endPoint.trim() && id) {
                const response = await fetch(`${BaseURL}/${endPoint}/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                return response.json();
            }
        } catch (error) {
            console.log("Error message: ", error);
        }
    },
};

const posts = requestPosts.getPosts("posts");

class httpClient {
    constructor(BaseURL) {
        this.BaseURL = BaseURL;
    }

    callAPI(METHOD, ENDPOINT, PARAMS=null, ID=null, BODY) {
       
        
        switch (METHOD) {
            case "GET":
                return this.getPosts(ENDPOINT, PARAMS);
                break;
            case "POST":
                return this.createPost(ENDPOINT, BODY);
                break;
            case "PUT":
                return this.updatePost(ENDPOINT, ID, BODY);
                break;
            case "DELETE":
                return this.deletePost(ENDPOINT, ID);
                break;
            default:
                return "Bunday So'rovni qabul qilolmaymiz!";
        }
    }

    async getPosts(endPoint, params) {
        try {
            if (endPoint.trim()) {
                const response = await fetch(`${this.BaseURL}/${endPoint}${params ? params : ""}`);
                const data = await response.json();
                return data;
            }
        } catch (error) {
            console.log("Error message: ", error);
        }
    }
    async createPost(endPoint, data) {
        try {
            if (endPoint.trim() && Object.keys(data).length) {
                const response = await fetch(`${this.BaseURL}/${endPoint}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                return response.json();
            }
        } catch (error) {
            console.log("Error message: ", error);
        }
    }
    async updatePost(endPoint, id, data) {
        try {
            if (endPoint.trim() && Object.keys(data).length) {
                const response = await fetch(`${this.BaseURL}/${endPoint}/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                return response.json();
            }
        } catch (error) {
            console.log("Error message: ", error);
        }
    }
    async deletePost(endPoint, id) {
        try {
            if (endPoint.trim() && id) {
                const response = await fetch(`${this.BaseURL}/${endPoint}/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                return response.json();
            }
        } catch (error) {
            console.log("Error message: ", error);
        }
    }
}

const post = new httpClient("http://localhost:8080");

post.callAPI("GET", "posts", "?_limit=2");


$(".btn-primary").addEventListener("click", ()=>{
    console.log("first")
    post.callAPI("PUT", "posts", "" , "3", { title: "Lorem Ipsum 3srfdgbtfgnhj myf",id: "3"});
});
