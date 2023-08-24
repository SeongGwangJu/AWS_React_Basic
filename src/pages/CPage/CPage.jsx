import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import UseMemoContainer from '../../components/UseMemoContainer/UseMemoContainer';
import MainLayout from '../../components/MainLayout/MainLayout';


function CPage(props) {
    const [ studentYear, setStudentYear ] = useState("");
    const [ hobby, setHobby ] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if(name === "studentYear") {
            setStudentYear(value);
        }else {
            setHobby(value);
        }
    }
    return (
        <>
            <div>
                <p>당신의 학년은 몇 학년입니까?</p>
                <input type="number" name="studentYear" onChange={handleInputChange}/>
                <p>당신의 취미는 무엇입니까?</p>

                <label htmlFor="h1">soccer</label>
                <input type="radio" id="h1" name="hobby" value="soccer" onChange={handleInputChange}/>
                <label htmlFor="h2">bascketball</label>
                <input type="radio" id="h2" name="hobby" value="bascketball" onChange={handleInputChange}/>
                <label htmlFor="h3">baseball</label>
                <input type="radio" id="h3" name="hobby" value="baseball" onChange={handleInputChange}/>
                <label htmlFor="h4">golf</label>
                <input type="radio" id="h4" name="hobby" value="golf" onChange={handleInputChange}/>

                <UseMemoContainer studentYear={studentYear} hobby={hobby} />
            </div>
        </>
    );
}

export default CPage;