import { useState } from 'react'
import personalStyle from "../../assets/styleData.json"
import personalData from "../../assets/personalData.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faFileExport } from '@fortawesome/free-solid-svg-icons'


import { Age, Bio, Contact, Container, ContainerContacts, Content, ExportButton, Menu, MenuInfos, Navbar, NavbarItem, Occupation, ProfileImage, ProfileName, Title } from './style'
import ProfessionalExperience from '../../components/ProfessionalExperience';
import Education from '../../components/Education';
import Contacts from '../../components/Contacts';
import Projects from '../../components/Projects';

type TNavbarItem = 'PERSONAL_EXPERIENCE' | 'EDUCATION' | 'PROJECTS' | 'CONTACTS'

function Home() {
    const [selectedItem, setSelectedItem] = useState<TNavbarItem>('PERSONAL_EXPERIENCE')
    const [renderAllComponents, setRenderAllComponents] = useState(false)

    function exportFile(){
        setRenderAllComponents(true)
        setTimeout(() => {
            window.print()
            setRenderAllComponents(false)
        }, 500);
    }

    const titleStrategy = {
        'PERSONAL_EXPERIENCE': 'Minhas experiências profissionais',
        'EDUCATION': 'Meus estudos e certificados',
        'PROJECTS': 'Projetos que já desenvolvi',
        'CONTACTS': 'Como entrar em contato comigo'
    }

    function changeNavbar(type: TNavbarItem){
        setSelectedItem(type)
        console.log(selectedItem);
        
    }

    function getTitle(){
        return titleStrategy[selectedItem]
    }

    function getContacts(){
        return [ personalData.contatos.whatsApp, personalData.contatos.email]
    }

  return (
    <Container>
        <Menu>
            <MenuInfos>
                <ProfileImage src={personalData.imagem} />
                <ProfileName>{personalData.nome}</ProfileName>
                <Occupation>{personalData.profissao}</Occupation>
                <Age>{personalData.idade} anos</Age>
                <Bio>"{personalData.bio}"</Bio>
            </MenuInfos>
            <ContainerContacts>
                    {
                        personalData.contatos.whatsApp.length ? (
                            <Contact>
                                <FontAwesomeIcon icon={faWhatsapp} size={'xl'} color={personalStyle.ligthMode.secondaryColor}/>
                                <span>{personalData.contatos.whatsApp}</span>
                            </Contact>
                        ) : <></>
                    }
                    {
                        personalData.contatos.email.length ? (
                            <Contact>
                                <FontAwesomeIcon icon={faEnvelope} size={'xl'} color={personalStyle.ligthMode.secondaryColor}/>
                                <span>{personalData.contatos.email}</span>
                            </Contact>
                        ) : <></>
                    }
                    {
                        personalData.contatos.instagram.length ? (
                            <Contact>
                                <FontAwesomeIcon icon={faInstagram} size={'xl'} color={personalStyle.ligthMode.secondaryColor}/>
                                <span>{personalData.contatos.instagram}</span>
                            </Contact>
                        ) : <></>
                    }
                    {
                        personalData.contatos.linkedIn.length ? (
                            <Contact>
                                <FontAwesomeIcon icon={faLinkedin} size={'xl'} color={personalStyle.ligthMode.secondaryColor}/>
                                <span>{personalData.contatos.linkedIn}</span>
                            </Contact>
                        ) : <></>
                    }
                    {
                        personalData.contatos.github.length ? (
                            <Contact>
                                <FontAwesomeIcon icon={faGithub} size={'xl'} color={personalStyle.ligthMode.secondaryColor}/>
                                <span>{personalData.contatos.github}</span>
                            </Contact>
                        ) : <></>
                    }
            </ContainerContacts>
        </Menu>
        <Content>
            {
                !renderAllComponents && (
                    <Navbar>
                        <NavbarItem onClick={() => changeNavbar('PERSONAL_EXPERIENCE')} selected={selectedItem === 'PERSONAL_EXPERIENCE'}>Experiência</NavbarItem>
                        <NavbarItem onClick={() => changeNavbar('EDUCATION')} selected={selectedItem === 'EDUCATION'}>Escolaridade</NavbarItem>
                        <NavbarItem onClick={() => changeNavbar('PROJECTS')} selected={selectedItem === 'PROJECTS'}>Projetos</NavbarItem>
                        <NavbarItem onClick={() => changeNavbar('CONTACTS')} selected={selectedItem === 'CONTACTS'}>Contatos</NavbarItem>
                    </Navbar>

                )
            }
            {
                !renderAllComponents && (
                    <Title>{getTitle()}</Title>
                )
            }

            {
                renderAllComponents && (
                    <>
                    <Title>Minhas experiências profissionais</Title>
                    <ProfessionalExperience data={personalData.experiencias}/>
                    <Title>Meus estudos e certificados</Title>
                    <Education data={personalData.escolaridade}/>
                    <Title>Projetos que já desenvolvi</Title>
                    <Projects data={personalData.projetos}/>
                    <Title>Como entrar em contato comigo</Title>
                    <Contacts data={getContacts()}/>
                    </>
                )
            }

            {
                selectedItem === 'PERSONAL_EXPERIENCE' && !renderAllComponents && (
                    <ProfessionalExperience data={personalData.experiencias}/>
                )
            }
            {
                selectedItem === 'EDUCATION' && !renderAllComponents && (
                    <Education data={personalData.escolaridade}/>
                )
            }
            {
                selectedItem === 'PROJECTS' && !renderAllComponents && (
                    <Projects data={personalData.projetos}/>
                )
            }
            {
                selectedItem === 'CONTACTS' && !renderAllComponents && (
                    <Contacts data={getContacts()}/>
                )
            }

            {
                !renderAllComponents && (
                    <ExportButton onClick={() => exportFile()}>
                        <FontAwesomeIcon icon={faFileExport} size={'xl'} color={personalStyle.ligthMode.primaryColor}/>
                    </ExportButton>
                )
            }
        </Content>
    </Container>
  )
}

export default Home