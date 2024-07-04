import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { data } from '../shared/Data';

function Works() {
    const navigate = useNavigate();
    const location = useLocation();

    // console.log('location', location);
    return (
        <div>
            <h3>할일목록</h3>
            {data.map((Data) => {
                return (
                    <div key={Data.id}>
                        {Data.id}
                        &nbsp;
                        <Link to={`${Data.id}`}> {Data.todo}</Link>
                    </div>
                );
            })}
            <br />
            <button
                onClick={() => {
                    navigate('/');
                }}
            >
                Home으로 이동
            </button>
            <br />
            <Link to={'/contact'}>contact 페이지로 이동하기</Link>
        </div>
    );
}

export default Works;
