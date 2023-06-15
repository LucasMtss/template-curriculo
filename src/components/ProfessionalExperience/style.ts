import { styled } from "styled-components"
import personalStyle from "../../assets/styleData.json"

export const ContainerTags = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 16px;
`
export const Tag = styled.span`
    padding: 7px 25px;
    font-size: 20px;
    font-weight: bold;
    background-color: ${personalStyle.ligthMode.secondaryColor};
    color: ${personalStyle.ligthMode.primaryColor};
    border-radius: 18px;

    @media (max-width: 600px){
        font-size: 10px;
        padding: 3px 7px;
    }
`