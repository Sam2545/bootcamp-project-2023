import mongoose from "mongoose";
import { Schema} from "mongoose";

export type IComment = {
    user: string;
    comment: string,
}
// typescript type (can also be an interface)
type IPortfolio = {
    
    title: string;
    slug: string; 
    description: string; // for preview
    image: string; // for preview
    comments: IComment[];
};



// mongoose schema 
const portfolioSchema = new Schema<IPortfolio>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    comments: [{
        user: { type: String, required: false },
        comment: { type: String, required: true },
    }]
})

// defining the collection and model
const Portfolio = mongoose.models['portfolio'] ||
mongoose.model('portfolio', portfolioSchema);

export default Portfolio;