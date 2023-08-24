import React, { Children, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SMainContainer = css`
    display: flex;
`;

const SSidebar = css`
    width: 300px;
    background-color: #ddd;
`;

const SContentContainer = css`
    flex-grow: 1; 
    // flex-grow를 주면 남은공간을 모두 이친구의 공간으로 채운다.
    height: 700px;
    background-color: #aaa;
`;

function MainLayout({ Title, menus, children }) {

    return (
        <>
            <h1>{ Title }</h1>
            <div css={SMainContainer}>
                <ul css={SSidebar}>
                    {/* 객체를 map으로 반복을돌려 원하는걸 하나씩 빼는방법 */}
                    {menus.map((menu) => <li key={menu.id} >{menu.name}</li>)}
                </ul>
                <div css={SContentContainer}>
                    { children }
                </div>
            </div>
        </>
    );
}

export default MainLayout;