import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import P2 from './P2/P2';

const SContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    background-color: #666;
`;

function P1( { num, setNum }) {
    return (
        <div css={SContainer}>
            <P2 num={num} setNum={setNum} />
        </div>
    );
}

export default P1;