import axios from 'axios';

const getDataFromEndPoint = () => {
    return axios.get('some/endpoint').then(
        reponse = () => {
            console.log('No error was returned');
            console.log('httpStatusCode ' + response.status);
        },
        error= () => {
            console.log('There was an error');
        }
    );
};

//TODO -- finish this code block
const getWeatherByZipcode = (zipcode) => {
    return axios.get('https://www.openapi.com/weather?' + zipcode).then(
        response = () => {
            const data = response.data;
            return data;
        },
        error = () => {
            const errorMessage = error.message;
            console.log('Error: ' + errorMessage);
        }
    );

};

export {getDataFromEndPoint, getWeatherByZipcode};