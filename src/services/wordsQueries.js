import http from '../http-common';
const config = {
    headers: {
        "X-Mashape-Key": "13b2f42655mshd152bbf84692561p1309f0jsnfc310ae65e66",
        "Accept": "application/json",

    },
    params: {
        random: true
    }

}
class wordsQueries {
    getRandomWord() {
        return http.get('https://wordsapiv1.p.rapidapi.com/words/', config);
    }
}

export default new wordsQueries();