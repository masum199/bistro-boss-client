import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
         <SectionTitle subHeading="Check It Out" heading="Featured Item"></SectionTitle>
        <div className="md:flex justify-center bg-slate-400 bg-opacity-40 items-center py-20 px-36 pt-12">
            <div>
                <img src={featured} alt="" />
            </div>
            <div className="md:ml-10">
                <p>Aug 20, 2029</p>
                <p className="uppercase">where can i get some</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum enim, nisi aspernatur provident quia libero quos id rem vel fugit inventore, quod praesentium, deserunt nihil tenetur non tempora quo placeat magnam ut perferendis? Sapiente facilis sunt natus adipisci, doloremque laborum rerum voluptatibus esse cupiditate officia itaque ratione molestias laudantium aspernatur!</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </div>
        </div>
        </div>
    );
};

export default Featured;