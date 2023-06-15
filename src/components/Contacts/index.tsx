import { SectionTitle } from '../../pages/Home/style';

interface IEducationProps {
    data: string[];
}

function Contacts({data}: IEducationProps) {
  return (
        data.map(contact => {
            return (
            <>
                <SectionTitle>{contact}</SectionTitle>
            </>
            )
        }) 
  )
}

export default Contacts
