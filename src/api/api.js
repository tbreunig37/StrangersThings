export const API_URL="https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt/"
export async function fetchPosts()
{
    try{
        const response = await fetch(API_URL+"posts/");
        const jdata= await response.json();
    //    console.log(jdata);
        return jdata.data.posts;
    }
    catch(error)
    {
        throw error;
    }
}