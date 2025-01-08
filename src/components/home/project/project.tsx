import React from "react";
import Link from "next/link";
import { NextPage } from "next";
import { LangProps } from "@/types/lang";
import { getDictionary } from "@/app/[lang]/dictionaries";
import ProjectCard from "./projectCard";
import { projectImageMapping } from "@/constants/projectImageMapping";

const Project: NextPage<LangProps> = async ( { params } ) => {
	const lang = (await params).lang;
	const dict = await getDictionary( lang );
	const projectsDict = dict.home.projects;

	const displayedProjects = projectsDict.data.slice( 0, 3 );

	return (
		<section className="my-32">
			<div className="container mx-auto">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-3xl font-bold text-blue-600">
						{ projectsDict.title }
					</h2>
					<Link
						href="/showcase"
						className="text-blue-600 hover:underline flex items-center"
					>
						{ projectsDict.seeMore } →
					</Link>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{ displayedProjects.map( ( project ) => (
						<ProjectCard
							key={ project.title }
							{ ...project }
							company={ projectImageMapping.logos[project.company] }
							image={ projectImageMapping.projects[project.image] }
						/>
					) ) }
				</div>
			</div>
		</section>
	);
};

export default Project;