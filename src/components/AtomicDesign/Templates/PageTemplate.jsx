import HeaderOrganism from "../Organisms/HeaderOrganism";
import MainOrganism from "../Organisms/MainOrganism";
import FooterOrganism from "../Organisms/FooterOrganism";

export default function PageTemplate({main}) {
    return (
        <div>
            <HeaderOrganism />
            <MainOrganism>{main}</MainOrganism>
            <FooterOrganism />
        </div>
    )
}