import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../shared/Data';

function Work() {
    const params = useParams();
    // console.log('params', params);

    // 어떤 Todo 인지 찾아보기는 Find메서드
    const foundData = data.find((Data) => {
        console.log('Data.id', Data.id);
        console.log('params.id', params.id);
        console.log('-------------------------');
        return Data.id === parseInt(params.id);
    });

    console.log('foundData', foundData);

    return (
        <div>
            <h3>할일 : {foundData.todo}</h3>
        </div>
    );
}

export default Work;
