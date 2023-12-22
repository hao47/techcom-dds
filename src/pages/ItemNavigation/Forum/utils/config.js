import axios from 'axios';


// function GetDataFromApi() {
//
//
//
//         .then(response => {
//             console.log(response.data.posts[0])
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//
//
// }
//
// export default GetDataFromApi


export  const GetForum = async () => {

    return await axios.get('http://127.0.0.1:8000/posts')
}

export  const CreateForum = async (data) => {

    return await axios.post('http://127.0.0.1:8000/posts',data)
}

export  const GetHastags = async () => {

    return await axios.get('http://127.0.0.1:8000/hastag')
}
