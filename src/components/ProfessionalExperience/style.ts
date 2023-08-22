import { styled } from "styled-components"

interface IStyleProps {
    styleData: any;
}

export const ContainerTags = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 16px;
`
export const Tag = styled.span<IStyleProps>`
    padding: 7px 25px;
    font-size: 20px;
    font-weight: bold;
    background-color: ${props => props.styleData?.ligthMode.secondaryColor};
    color: ${props => props.styleData?.ligthMode.primaryColor};
    border-radius: 18px;

    @media (max-width: 600px){
        font-size: 10px;
        padding: 3px 7px;
    }
`