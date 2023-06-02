import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/usemenu";


const PopulerMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === "popular")
    return (
        <div>
           <SectionTitle
           subHeading={"Popular Item"}
           heading={"FromOur menu"}>  
            </SectionTitle> 
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item =><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4">VEW FULL MENU</button>
        </div>
        </div>
    );
};

export default PopulerMenu;