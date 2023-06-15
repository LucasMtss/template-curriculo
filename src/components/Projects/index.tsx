import { SectionContent, SectionTitle } from '../../pages/Home/style';
import { ContainerTags, Tag } from '../ProfessionalExperience/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import personalStyle from "../../assets/styleData.json" 

interface IProjectsProps {
    data: {
        nome: string;
        link: string;
        resumo: string;
        tecnologias: string[]
    }[]
}

function Projects({data}: IProjectsProps) {
  return (
        data.map(project => {
            return (
            <>
                <SectionTitle>{project.nome} <a href={project.link.length ? project.link : '#'} target='_blank'><FontAwesomeIcon icon={faLink} size={'sm'} color={personalStyle.ligthMode.secondaryColor} /></a></SectionTitle>
                <SectionContent><p>{project.resumo}</p></SectionContent>
                <ContainerTags>
                    {
                        project.tecnologias.map(competency => <Tag>{competency}</Tag>)
                    }
                </ContainerTags>
            </>
            )
        }) 
  )
}

export default Projects
