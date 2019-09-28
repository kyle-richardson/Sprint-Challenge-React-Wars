import React from "react"
import styled from "styled-components"

const Person = (props) => {
    const Card = styled.div`
        border: 2px solid black;
        margin: 10px auto;
        text-align: left;
        padding-left: 10px;
        background-color: rgba(255,255,255,.5);
        max-width: 500px;
        border-radius: 2px;

    `
    return (
        <Card>
            <p>Name: {props.person.name}</p>
            <p>Gender: {props.person.gender}</p>
            <p>Birth Year: {props.person.birth_year}</p>
        </Card>
    )
}

export default Person
