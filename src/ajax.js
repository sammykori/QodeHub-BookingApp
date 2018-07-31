const apiHost = 'http://www.mocky.io/v2/5b59b5682f00000a175f951c'

export default {
    async fetchInitialDeals(){
        try{
            const response = await fetch(apiHost + '/api/deals');
            const responseJson = await response.json();
            return responseJson;
        }catch(error){
            console.error(error);
        }
    }
};