import Request from '../axios/index'
 const musicService = {
    getList:  async function (apiUrl: string) {

        const [dataResponse, err, msg, status] = await Request.get(apiUrl);      
        return [dataResponse, err, msg, status];
    },

    getMusic: async function (apiUrl:string) {
        const [dataResponse, err, msg, status] = await Request.get(apiUrl);      
        return [dataResponse, err, msg, status];
    }
}
export default musicService