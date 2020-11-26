import http from '../http-common';

class quoteQueries {
    getQuote() {
        return http.get('https://type.fit/api/quotes');
    }
}

export default new quoteQueries();