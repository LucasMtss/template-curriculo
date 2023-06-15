import { SectionContent, SectionTitle } from '../../pages/Home/style';

interface IEducationProps {
    data: {
        instituicao:string;
        dataInicial:string;
        dataFinal:string;
        resumo:string;
    }[]
}

function Education({data}: IEducationProps) {
  return (
        data.map(item => {
            return (
            <>
                <SectionTitle>{item.instituicao} - {item.dataInicial} até {item.dataFinal}</SectionTitle>
                <SectionContent><p>{item.resumo}</p></SectionContent>
            </>
            )
        }) 
  )
}

export default Education
