import { SectionContent, SectionTitle } from '../../pages/Home/style';

interface IEducationProps {
    styleData: any;
    data: {
        instituicao:string;
        dataInicial:string;
        dataFinal:string;
        resumo:string;
    }[]
}

function Education({data, styleData}: IEducationProps) {
  return (
        data.map(item => {
            return (
            <>
                <SectionTitle styleData={styleData}>{item.instituicao} - {item.dataInicial} até {item.dataFinal}</SectionTitle>
                <SectionContent styleData={styleData}><p>{item.resumo}</p></SectionContent>
            </>
            )
        }) 
  )
}

export default Education
