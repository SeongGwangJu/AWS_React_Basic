import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import P3 from './P3/P3';

const SContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    background-color: #aaa;
`;

function P2({ num, setNum }) {
    return (
        <div css={SContainer}>
            <P3 num={num} setNum={setNum}/>
        </div>
    );
}

export default P2;