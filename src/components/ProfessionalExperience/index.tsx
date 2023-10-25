import { SectionContent, SectionTitle } from '../../pages/Home/style';
import { ContainerTags, Tag } from './style';

interface IProfessionalExperienceProps {
    styleData: any;
    data: {
        empresa: string;
        dataInicial: string;
        dataFinal: string;
        resumo: string;
        competencias: string[]
    }[]
}

function ProfessionalExperience({data, styleData}: IProfessionalExperienceProps) {
  return (
        data.map(experience => {
            return (
            <>
                <SectionTitle styleData={styleData}>{experience.empresa} - {experience.dataInicial} até {experience.dataFinal}</SectionTitle>
                <SectionContent styleData={styleData}><p>{experience.resumo}</p></SectionContent>
                <ContainerTags>
                    {
                        experience.competencias.map(competency => <Tag styleData={styleData}>{competency}</Tag>)
                    }
                </ContainerTags>
            </>
            )
        }) 
  )
}

export default ProfessionalExperience
