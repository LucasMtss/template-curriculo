import { SectionTitle } from '../../pages/Home/style';

interface IEducationProps {
    styleData: any;
    data: string[];
}

function Contacts({data, styleData}: IEducationProps) {
  return (
        data.map(contact => {
            return (
            <>
                <SectionTitle styleData={styleData}>{contact}</SectionTitle>
            </>
            )
        }) 
  )
}

export default Contacts
