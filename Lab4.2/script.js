const axios = require ('axios');

//1
async function fetchUrls(urls){
    const results = [];
    for (const url of urls){
        const res= await axios.get(url);
        results.push(res);
    }
    return results;
}
//Thực hiện tuần tự: Các yêu cầu được gửi đi lần lượt, đợi kết quả của yêu cầu trước mới gửi yêu cầu tiếp theo.


//2
async function fetchUrlsParallel(urls){
    const results = await Promise.all(
        url.map(function(url){
            return axios.get (url);
        }));
        return results;
    }
 //Thực hiện song song: Các yêu cầu được gửi đi đồng thời, không cần đợi kết quả của yêu cầu trước mới gửi   
