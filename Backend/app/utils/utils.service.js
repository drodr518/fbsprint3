

class UtilsService {

    constructor() {
    }

    async helloWorld() {
        return "Hello World!";
    }

    async listcourses() {
        return [
          {
            "id": 1,
            "name": "Javascript 101"
          },
          {
            "id": 2,
            "name": "NodeJS Development"
          },
          {
            "id": 3,
            "name": "Data Modeling"
          }
        ];
      }
  
  

}

module.exports = new UtilsService();