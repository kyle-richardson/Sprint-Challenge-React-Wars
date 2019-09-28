import React from "react"
import styled from "styled-components"

const Person = (props) => {
    const Div = styled.div`
        border: 2px solid black;
        margin: 10px auto;
        text-align: left;
        padding-left: 10px;
        background-color: rgba(255,255,255,.5);
        max-width: 500px;

    `
    return (
        <Div>
            <p>Name: {props.person.name}</p>
            <p>Gender: {props.person.gender}</p>
            <p>Birth Year: {props.person.birth_year}</p>
        </Div>
    )
}

export default Person
