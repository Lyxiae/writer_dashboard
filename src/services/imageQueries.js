import http from '../http-common';

class imageQueries {
    getImageList(pageNumber) {
        return http.get(`https://picsum.photos/v2/list?page=${pageNumber}&limit=3`);
    }
}

export default new imageQueries();