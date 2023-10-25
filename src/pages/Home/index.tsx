import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faFileExport } from '@fortawesome/free-solid-svg-icons'

import { Age, Bio, Contact, Container, ContainerContacts, Content, ExportButton, Menu, MenuInfos, Navbar, NavbarItem, Occupation, ProfileImage, ProfileName, Title, UserNotFoundContainer } from './style'
import ProfessionalExperience from '../../components/ProfessionalExperience';
import Education from '../../components/Education';
import Contacts from '../../components/Contacts';
import Projects from '../../components/Projects';
import api from '../../services/api';

type TNavbarItem = 'PERSONAL_EXPERIENCE' | 'EDUCATION' | 'PROJECTS' | 'CONTACTS'

function Home() {
    const [selectedItem, setSelectedItem] = useState<TNavbarItem>('PERSONAL_EXPERIENCE');
    const [renderAllComponents, setRenderAllComponents] = useState(false);
    const [personalData, setPersonalData] = useState<any>();
    const [styleData, setStyleData] = useState<any>();

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
        return personalData?.contatos ? [ personalData?.contatos?.whatsApp, personalData?.contatos?.email] : [];
    }

    async function getData(){
        try {
            const splitedPathname = window.location.pathname.split('/')
            const slug = splitedPathname[splitedPathname.length -1]
            const { data } = await api.get(`/curriculum/slug/${slug}`);
            console.log(data);
            setStyleData(data.data.styleData);
            setPersonalData(data.data.personalData);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])

  return personalData && styleData ? (
    <Container>
        <Menu>
            <MenuInfos>
                <ProfileImage styleData={styleData} src={personalData.imagem} />
                <ProfileName styleData={styleData}>{personalData.nome}</ProfileName>
                <Occupation styleData={styleData}>{personalData.profissao}</Occupation>
                <Age styleData={styleData}>{personalData.idade} anos</Age>
                <Bio styleData={styleData}>"{personalData.bio}"</Bio>
            </MenuInfos>
            <ContainerContacts>
                    {
                        personalData.contatos.whatsApp.length ? (
                            <Contact styleData={styleData}>
                                <FontAwesomeIcon icon={faWhatsapp} size={'xl'} color={styleData.ligthMode.secondaryColor}/>
                                <span>{personalData.contatos.whatsApp}</span>
                            </Contact>
                        ) : <></>
                    }
                    {
                        personalData.contatos.email.length ? (
                            <Contact styleData={styleData}>
                                <FontAwesomeIcon icon={faEnvelope} size={'xl'} color={styleData.ligthMode.secondaryColor}/>
                                <span>{personalData.contatos.email}</span>
                            </Contact>
                        ) : <></>
                    }
                    {
                        personalData.contatos.instagram.length ? (
                            <Contact styleData={styleData}>
                                <FontAwesomeIcon icon={faInstagram} size={'xl'} color={styleData.ligthMode.secondaryColor}/>
                                <span>{personalData.contatos.instagram}</span>
                            </Contact>
                        ) : <></>
                    }
                    {
                        personalData.contatos.linkedIn.length ? (
                            <Contact styleData={styleData}>
                                <FontAwesomeIcon icon={faLinkedin} size={'xl'} color={styleData.ligthMode.secondaryColor}/>
                                <span>{personalData.contatos.linkedIn}</span>
                            </Contact>
                        ) : <></>
                    }
                    {
                        personalData.contatos.github.length ? (
                            <Contact styleData={styleData}>
                                <FontAwesomeIcon icon={faGithub} size={'xl'} color={styleData.ligthMode.secondaryColor}/>
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
                        <NavbarItem styleData={styleData} onClick={() => changeNavbar('PERSONAL_EXPERIENCE')} selected={selectedItem === 'PERSONAL_EXPERIENCE'}>Experiência</NavbarItem>
                        <NavbarItem styleData={styleData} onClick={() => changeNavbar('EDUCATION')} selected={selectedItem === 'EDUCATION'}>Escolaridade</NavbarItem>
                        <NavbarItem styleData={styleData} onClick={() => changeNavbar('PROJECTS')} selected={selectedItem === 'PROJECTS'}>Projetos</NavbarItem>
                        <NavbarItem styleData={styleData} onClick={() => changeNavbar('CONTACTS')} selected={selectedItem === 'CONTACTS'}>Contatos</NavbarItem>
                    </Navbar>

                )
            }
            {
                !renderAllComponents && (
                    <Title styleData={styleData}>{getTitle()}</Title>
                )
            }

            {
                renderAllComponents && (
                    <>
                    <Title styleData={styleData}>Minhas experiências profissionais</Title>
                    <ProfessionalExperience styleData={styleData} data={personalData.experiencias}/>
                    <Title styleData={styleData}>Meus estudos e certificados</Title>
                    <Education styleData={styleData} data={personalData.escolaridade}/>
                    <Title styleData={styleData}>Projetos que já desenvolvi</Title>
                    <Projects styleData={styleData} data={personalData.projetos}/>
                    <Title styleData={styleData}>Como entrar em contato comigo</Title>
                    <Contacts styleData={styleData} data={getContacts()}/>
                    </>
                )
            }

            {
                selectedItem === 'PERSONAL_EXPERIENCE' && !renderAllComponents && (
                    <ProfessionalExperience styleData={styleData} data={personalData.experiencias}/>
                )
            }
            {
                selectedItem === 'EDUCATION' && !renderAllComponents && (
                    <Education styleData={styleData} data={personalData.escolaridade}/>
                )
            }
            {
                selectedItem === 'PROJECTS' && !renderAllComponents && (
                    <Projects styleData={styleData} data={personalData.projetos}/>
                )
            }
            {
                selectedItem === 'CONTACTS' && !renderAllComponents && (
                    <Contacts styleData={styleData} data={getContacts()}/>
                )
            }

            {
                !renderAllComponents && (
                    <ExportButton styleData={styleData} onClick={() => exportFile()}>
                        <FontAwesomeIcon icon={faFileExport} size={'xl'} color={styleData.ligthMode.primaryColor}/>
                    </ExportButton>
                )
            }
        </Content>
    </Container>
  ) : (
        <UserNotFoundContainer>
            <h1>Usuário não encontrado :(</h1>
        </UserNotFoundContainer>
  )
}

export default Home