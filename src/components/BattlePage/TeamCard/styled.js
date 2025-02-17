import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ isSelected }) => (isSelected ? "green" : "#fff")};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
`;

export const Name = styled.p`
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
`;
