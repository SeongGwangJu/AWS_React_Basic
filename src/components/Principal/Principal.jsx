import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import P1 from './P1/P1';
import { useRecoilState } from 'recoil';
import { principalState } from '../../store/principalStore';

const SContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:50px auto;
    width: 500px;
    height: 500px;
    background-color: #333;
    color: red;
`;

function Principal(props) {
    
    //="principalState(principalStore에 저장된 함수)를 RecoildState로 사용한다"
    const [ principal, setPrincipal ] = useRecoilState(principalState);
    const [ num, setNum ] = useState(0);

    useEffect(() => {
        setPrincipal({
            ...principal,
            username: "SoEunLim"
        });
    }, []); // deps에 '[]' :페이지가 처음 로드되어졌을 때

    return (
        <div css={SContainer}>
            <h1>{num}</h1>
            <P1 num={num} setNum={setNum}/>

        </div>
    );
}

export default Principal;