import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(135deg, #1e1e2e, #2a2a3a);
    color: white;
`;

export const UpperSection = styled.div`
    flex: 0.4; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
`;

export const LowerSection = styled.div`
    flex: 0.6; 
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Button = styled.button`
    width: 220px;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    background: ${(props) => (props.pve ? "#00c853" : "#2979ff")};
    color: white;
    box-shadow: 0 0 15px ${(props) => (props.pve ? "#00c853" : "#2979ff")};

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 25px ${(props) => (props.pve ? "#00e676" : "#448aff")};
    }

    &:active {
        transform: scale(0.95);
    }
`;
