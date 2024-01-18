import React from "react";
import style from "./portfolio.module.css";
import connectDB from "@/helpers/db";
import Portfolio from "@/database/portfolioSchema";

async function getProjects(){
    await connectDB() // function from db.ts before

    try {
            // query for all portfolios and sort by date
        const projects = await Portfolio.find().sort({ _id: -1 }).orFail()
            // send a response as the blogs as the message
        return projects
    } catch (err) {
        // console.log(err)
        return null
    }
}
export default async function PortfolioPage() {

    const projects = await getProjects()
    return (
        <header>
        <h1 className={style.page_title}>Sameer's Portfolio</h1>
            <div className="project">
                <table className={style.table}>
                    {projects == null ? 
                    <div>
                        <tr className={style.table_row_projects}>
                                <td className={style.td}>
                                    <a className={style.project_link} href="\">
                                        <p className={style.project_name}>Simple Sameer</p>
                                        <p className={style.project_description}>This website contains my online resume and a portfolio of CS projects that I have made</p>
                                        <div className={style.project_details}>
                                            <img className={style.project_details_image} src="./images/Homescreen2.png" alt="Homescreen of my personal website"/>
                                        
                                        </div> 
                                    </a>
                                </td>
                                <td className={style.td}></td>
                                <td className={style.td}></td>
                            </tr>
                    </div>:
                    <div>
                        {projects.map(project => 
                            <tr className={style.table_row_projects}>
                                <td className={style.td}>
                                    <a className={style.project_link} href={project.slug}>
                                        <p className={style.project_name}>{project.title}</p>
                                        <p className={style.project_description}>{project.description}</p>
                                        <div className={style.project_details}>
                                            <img className={style.project_details_image} src={project.image} alt="Homescreen of my personal website"/>
                                        
                                        </div> 
                                    </a>
                                </td>

                            </tr>
                            ) }
                    </div>
                    
                    
                    }

                </table>
            </div>
        </header>
    );
}
