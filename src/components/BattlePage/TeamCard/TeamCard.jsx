import {CardContainer, Name, Image} from "./styled.js";

export const TeamCard = ({name, image, isSelected, onClick}) => {
    return (
        <CardContainer isSelected={isSelected} onClick={onClick}>
            <Image src={image} alt={name} />
            <Name>{name}</Name>
        </CardContainer>
    )
}
