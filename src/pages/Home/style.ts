import { styled } from "styled-components";
import personalStyle from "../../assets/styleData.json"

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;

    @media (max-width: 900px){
        flex-direction: column;
    }
`

export const Menu = styled.aside`
    width: 330px;
    height: 100%;
    min-height: 100vh;
    box-shadow: inset 0px -5px 22px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 34px;

    @media (max-width: 900px){
        box-shadow: none;
        width: 100%;
        align-items: flex-start;
        padding: 16px;
        height: fit-content;
        min-height: auto;
    }
`

export const MenuInfos = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (max-width: 900px){
        width: 100%;
        align-items: flex-start;
    }
`

export const ProfileImage = styled.img`
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    margin-bottom: 33px;
    border: solid 3px ${personalStyle.ligthMode.secondaryColor};

    @media (max-width: 600px){
        width: 100px;
        height: 100px;
        margin-bottom: 16px;
    }
`

export const ProfileName = styled.h2`
    font-size: 36px;
    width: 100%;
    text-align: center;
    color: ${personalStyle.ligthMode.secondaryColor};

    @media (max-width: 600px){
        font-size: 26px;
    }
`

export const Occupation = styled.p`
    font-size: 20px;
    width: 100%;
    text-align: center;
    padding: 10px;
    background-color: ${personalStyle.ligthMode.secondaryColor};
    color: white;
    border: none;
    color: ${personalStyle.ligthMode.primaryColor};
    margin-top: 12px;

    @media (max-width: 600px){
        font-size: 16px;
    }
    `

export const Age = styled.p`
    margin-top: 26px;
    width: 100%;
    margin-bottom: 12px;
    font-size: 20px;
    padding: 0 19px;
    color: ${personalStyle.ligthMode.textColor};

    @media (max-width: 600px){
        padding: 0;
    }
    `

export const Bio = styled.p`
    width: 100%;
    margin-bottom: 12px;
    font-size: 14px;
    padding: 0 19px;
    text-align: justify;
    color: ${personalStyle.ligthMode.textColor};

    @media (max-width: 600px){
        padding: 0;
        font-size: 12px;
    }
    `

export const ContainerContacts = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 19px;

    @media (max-width: 600px){
        display: none;
    }
`

export const Contact = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    width: 100%;
    height: fit-content;
    
    span {
        color: ${personalStyle.ligthMode.textColor};
        margin-left: 8px;
        font-size: 15px;
    }
`

export const Content = styled.div`
    padding: 34px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    max-height: 100vh;
    overflow-y: scroll;
    padding-bottom: 32px;

    @media (max-width: 900px){
        max-height: auto;
        overflow-y: visible;
        height: fit-content;
        padding: 16px;
    }
`

export const Navbar = styled.div`
    display: flex;
    gap: 12px;
`

interface NavbarItemProps {
    selected: boolean;
}

export const NavbarItem=styled.span<NavbarItemProps>`
    border-bottom: solid 3px ${props => props.selected ? personalStyle.ligthMode.secondaryColor : '#D0D6D9'};
    width: 120px;
    text-align: center;
    font-size: 15px;
    cursor: pointer;

    @media (max-width: 600px){
        font-size: 12px;
        width: 72px;
    }
`

export const Title = styled.h1`
    font-weight: bold;
    font-size: 36px;
    margin: 56px 0;
    color: ${personalStyle.ligthMode.secondaryColor};
    text-align: center;

    @media (max-width: 600px){
        font-size: 18px;
    }
`

export const SectionTitle = styled.h2`
    width: 100%;
    padding: 22px 11px;
    border-left: solid 12px ${personalStyle.ligthMode.secondaryColor};
    font-weight: bold;
    font-size: 24px;
    color: ${personalStyle.ligthMode.textColor};
    margin-bottom: 16px;

    @media (max-width: 600px){
        font-size: 16px;
        padding: 11px;
        border-left: solid 6px ${personalStyle.ligthMode.secondaryColor};
    }
`

export const SectionContent = styled.div`
    padding: 12px;
    border-radius: 6px;
    border: solid 1px ${personalStyle.ligthMode.secondaryColor};
    width: 100%;
    margin-bottom: 12px;
    
    p {
        font-size: 20px;
        color: ${personalStyle.ligthMode.textColor};
        font-weight: 500;

        @media (max-width: 600px){
            font-size: 12px;
        }
    }
`

export const ExportButton = styled.button`
    width: 60px;
    height: 60px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${personalStyle.ligthMode.secondaryColor};
    position: fixed;
    bottom: 26px;
    right: 26px;
    border-radius: 50%;
    cursor: pointer;
`