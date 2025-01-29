import Link from "next/link";
import React from "react";
import { getDictionary } from "@/utils/dictionaries";
import { NextPage } from "next";
import { LangProps } from "@/types/lang";
import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

interface TeamMemberProps {
	name: string;
	role: string;
	image: string;
	socialLinks: {
		instagram?: string;
		github?: string;
		linkedin?: string;
	};
}

const TeamMember: React.FC<TeamMemberProps> = ( { name, role, image, socialLinks } ) => (
	<div className="relative group">
		<NeonGradientCard
			className="flex items-center justify-center text-start hover:scale-105 hover:cursor-pointer transition-all duration-300 p-0">
			<div className="relative h-full bg-white rounded-lg overflow-hidden">
				<Image src={ image } alt={ name } className=" w-full h-96 object-cover" />
				<div
					className="absolute bottom-0 inset-0 bg-gradient-to-b from-transparent to-primary opacity-50 rounded-md"></div>
				<div className="p-4 absolute bottom-0 z-50 text-white">
					<h3 className="text-xl font-semibold">{ name }</h3>
					<p className="text-white">{ role }</p>
					<div className="flex items-center gap-2 mt-2">
						{ socialLinks.instagram && (
							<Link href={ socialLinks.instagram }
							      className="bg-white p-1 rounded-md transition-all duration-300 hover:cursor-pointer hover:scale-75">
								<span className="sr-only">Instagram</span>
								<Image src={ ImageConstants.logo.instagram } alt={ "instagram-logo" } height={ 20 }
								       width={ 20 } />
							</Link>
						) }
						{ socialLinks.github && (
							<Link href={ socialLinks.github }
							      className="bg-white p-1 rounded-md transition-all duration-300 hover:cursor-pointer hover:scale-75">
								<span className="sr-only">Github</span>
								<Image src={ ImageConstants.logo.github } alt={ "github-logo" } height={ 20 } width={ 20 } />
							</Link>
						) }
						{ socialLinks.linkedin && (
							<Link href={ socialLinks.linkedin }
							      className="bg-white p-1 rounded-md transition-all duration-300 hover:cursor-pointer hover:scale-75">
								<span className="sr-only">LinkedIn</span>
								<Image src={ ImageConstants.logo.linkedIn } alt={ "linkedin-logo" } height={ 20 } width={ 20 } />
							</Link>
						) }
					</div>
				</div>
			</div>
		</NeonGradientCard>
	</div>
);

const Team: NextPage<LangProps> = async ( { params } ) => {
	const lang = (await params).lang;
	const dictionary = await getDictionary( lang );
	const teamDict = dictionary.home.teams;

	const teamMembers = [
		{
			name: "Sulthon Kaffah Al Farizzi",
			role: "CEO of Overlogic",
			image: ImageConstants.teams.sulthon,
			socialLinks: {
				instagram: "#",
				github: "#",
				linkedin: "#"
			}
		},
		{
			name: "Joko Supriyanto",
			role: "CTO & Founder of Overlogic",
			image: ImageConstants.teams.joko,
			socialLinks: {
				instagram: "#",
				github: "#",
				linkedin: "#"
			}
		},
		{
			name: "Muhammad Rafli Silehu",
			role: "COO & Founder of Overlogic",
			image: ImageConstants.teams.rafli,
			socialLinks: {
				instagram: "#",
				github: "#",
				linkedin: "#"
			}
		}
	];

	return (
		<section className="my-32">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-primary mb-8">Who We Are</h2>
				{/*when small just show 1, when medium show 2*/ }
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{ teamMembers.map( ( member ) => (
						<TeamMember key={ member.name } { ...member } />
					) ) }
				</div>
				<div className="flex justify-center gap-4 mt-6 md:mt-12 z-50">
					<button
						className="p-2 rounded-full bg-gray-200 transition-all duration-200 hover:cursor-pointer hover:scale-105 hover:invert">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button
						className="p-2 rounded-full bg-gray-200 transition-all duration-200 hover:cursor-pointer hover:scale-105 hover:invert">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Team;