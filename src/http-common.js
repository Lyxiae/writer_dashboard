import axios from "axios";

const http = axios.create({
    // baseUrl: ""
});

// http.interceptors.request.use(function (config) {
//     const token = "snxMW-t1Z4fXXgW5sPJT";
//     config.headers.Authorization = `Bearer ${token}`;
// })

export default http;