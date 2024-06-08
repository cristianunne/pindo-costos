import { URLS } from "./URLS";

export const getRodalesAPI = async () => {

    let headers = new Headers();


    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json'); 
  
   
    const rawResponse = await fetch(URLS.RODALES_GET, {
        method: 'GET',
        headers: headers
        //body: JSON.stringify(data)
    });

    try {
        const content = rawResponse.json();
        //console.log(content);

        //user = content;
        return content;
    } catch (err) {
        console.log(err);
        return false;
    }

}