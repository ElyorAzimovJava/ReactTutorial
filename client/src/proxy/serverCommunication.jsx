const serverCommunication = {
    getAsync: (url) => {
       return new Promise((resolve, reject) => {
            const xhr = new window.XMLHttpRequest();
            xhr.open("get", url, true) // true: async
            xhr.onload = () => {resolve(JSON.parse(xhr.responseText)); };
            xhr.onerror = () => { reject("NETWORK_ERROR");};
            xhr.ontimeout = () => { reject("TIME_OUT");};
            xhr.send();
        })

    },
    postAsync: () => {

    },
    putAsync: () => {

    },
    deleteAsync: () => {

    }
}
export default serverCommunication;