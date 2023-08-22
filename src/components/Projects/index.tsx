import { SectionContent, SectionTitle } from '../../pages/Home/style';
import { ContainerTags, Tag } from '../ProfessionalExperience/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'

interface IProjectsProps {
    styleData: any;
    data: {
        nome: string;
        link: string;
        resumo: string;
        tecnologias: string[]
    }[]
}

function Projects({data, styleData}: IProjectsProps) {
  return (
        data.map(project => {
            return (
            <>
                <SectionTitle styleData={styleData}>{project.nome} <a href={project.link.length ? project.link : '#'} target='_blank'><FontAwesomeIcon icon={faLink} size={'sm'} color={styleData.ligthMode.secondaryColor} /></a></SectionTitle>
                <SectionContent styleData={styleData}><p>{project.resumo}</p></SectionContent>
                <ContainerTags>
                    {
                        project.tecnologias.map(competency => <Tag styleData={styleData}>{competency}</Tag>)
                    }
                </ContainerTags>
            </>
            )
        }) 
  )
}

export default Projects
