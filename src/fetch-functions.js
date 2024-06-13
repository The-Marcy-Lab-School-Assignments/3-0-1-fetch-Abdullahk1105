const userUrl = 'https://jsonplaceholder.typicode.com/users'

export const checkResponseStatus = () => {
    return fetch(userUrl) 
    .then(response => {
        return {
            ok : response.ok,
            status : response.status,
            url: response.url
        }
    }
        
    )
};

export const getUsers = () => {
    return fetch(userUrl)
    .then((response) => response.json())
   
};
export const getUserPosts = (userId, maxNumPosts = 3) => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    return fetch(url)
    .then((response) => response.json())
    .then((responseData) => responseData.splice(0, maxNumPosts))
    


};



export const createNewUser = (newUserData) => {
    const postOption = {
        method: "POST",                
        body: JSON.stringify(newUserData),       
        headers: {
            "Content-Type": "application/json"
        }  
    }
    return fetch(userUrl, postOption)
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            return responseData;
        })
}
