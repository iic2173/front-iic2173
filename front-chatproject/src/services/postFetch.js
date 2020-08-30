import axios from 'axios';

export default async function fetchData(_body, path) {

    const host = 'http://ec2-34-194-140-38.compute-1.amazonaws.com';

    var response;

    await axios({
        method: 'post',
        url: `${host}/${path}`,
        data: _body
    })
        .then((resp) => {
            response = resp
        })

    return { status: response.status, body: response };

}