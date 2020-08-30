import axios from 'axios';

export default async function fetchData(path) {

    const host = 'http://ec2-34-194-140-38.compute-1.amazonaws.com';

    var response;

    await axios(`${host}/${path}`).then((resp) => { response = resp })

    return { status: response.status, body: response };

}