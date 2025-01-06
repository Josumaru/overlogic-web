import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MagicCard } from "@/components/ui/magic-card";

export interface ProjectCardProps {
	title: string;
	description: string;
	company: string;
	category: string;
	platform: string;
	image: string;
	link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ( {
	title,
	description,
	company,
	category,
	platform,
	image,
	link
} ) => (
	<MagicCard className="cursor-pointer shadow-xl">
		<Link href={ link } target="_blank" rel="noopener noreferrer">
			<Image
				src={ company }
				alt={ title }
				className="p-2 rounded-xl w-full h-16 object-contain"
				style={ {
					background: "linear-gradient(to left, rgba(49, 109, 249, 0.4), rgba(49, 249, 212, 0.4))",
					backgroundRepeat: "no-repeat",
				} }
			/>
			<div className="relative h-48 flex items-center p-2 justify-center">
				<Image
					src={ image }
					alt={ title }
					className="rounded-xl w-full h-full object-cover bg-black"
				/>
			</div>
			<div className="px-4 mt-1 mb-4">
				<h3 className="text-lg font-bold mb-2">{ title }</h3>
				<p className="text-gray-800 text-sm line-clamp-3">
					{ description.substring( 0, 100 ) }...
				</p>
				<div className="flex mt-2 gap-2 items-center">
					<p className="text-gray-600 text-sm">{ category }</p>
					<p className="text-gray-600 text-sm">|</p>
					<p className="text-gray-600 text-sm">{ platform }</p>
				</div>
			</div>
		</Link>
	</MagicCard>
);

export default ProjectCard;