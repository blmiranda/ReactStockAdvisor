import { AxiosError } from 'axios';

function handleAxiosError(error: AxiosError): Error {
  if (error.response) {
    console.error(error.response.data);
    console.error(error.response.status);
    console.error(error.response.headers);

    // return custom error message for each status code if needed here
    return new Error('Response error');
  }

  if (error.request) {
    console.error(error.request);
    return new Error('Unable to connect to the server.');
  }

  console.log(error.config);
  return new Error('There was a problem requesting your request');
}

export default handleAxiosError;
