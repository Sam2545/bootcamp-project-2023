import mongoose from "mongoose";
import { Schema} from "mongoose";


// typescript type (can also be an interface)
type IPortfolio = {
    
    title: string;
    slug: string; 
    description: string; // for preview
    image: string; // for preview
};



// mongoose schema 
const portfolioSchema = new Schema<IPortfolio>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
})

// defining the collection and model
const Portfolio = mongoose.models['portfolio'] ||
mongoose.model('portfolio', portfolioSchema);

export default Portfolio;