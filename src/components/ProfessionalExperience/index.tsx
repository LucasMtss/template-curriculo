import { SectionContent, SectionTitle } from '../../pages/Home/style';
import { ContainerTags, Tag } from './style';

interface IProfessionalExperienceProps {
    data: {
        empresa: string;
        dataInicial: string;
        dataFinal: string;
        resumo: string;
        competencias: string[]
    }[]
}

function ProfessionalExperience({data}: IProfessionalExperienceProps) {
  return (
        data.map(experience => {
            return (
            <>
                <SectionTitle>{experience.empresa} - {experience.dataInicial} até {experience.dataFinal}</SectionTitle>
                <SectionContent><p>{experience.resumo}</p></SectionContent>
                <ContainerTags>
                    {
                        experience.competencias.map(competency => <Tag>{competency}</Tag>)
                    }
                </ContainerTags>
            </>
            )
        }) 
  )
}

export default ProfessionalExperience
