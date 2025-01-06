import React from 'react';
import {getDictionary} from "@/app/[lang]/dictionaries";
import {NextPage} from "next";
import {LangProps} from "@/types/lang";
import {ImageConstants} from "@/constants/ImageConstants";
import Image from "next/image";
import {NeonGradientCard} from "@/components/ui/neon-gradient-card";

interface TeamMemberProps {
    name: string;
    role: string;
    image: any;
    socialLinks: {
        instagram?: string;
        github?: string;
        linkedin?: string;
    };
}

const TeamMember: React.FC<TeamMemberProps> = ({name, role, image, socialLinks}) => (
    <div className="relative group">
        <NeonGradientCard className="max-w-sm items-center justify-center text-center">
            <div className="relative h-full bg-white rounded-lg overflow-hidden">
                <Image src={image} alt={name} className="w-full h-80 object-cover"/>
                <div className="p-4">
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-gray-600">{role}</p>
                    <div className="flex gap-2 mt-2">
                        {socialLinks.instagram && (
                            <a href={socialLinks.instagram} className="text-gray-600 hover:text-blue-600">
                                <span className="sr-only">Instagram</span>
                                <Image src={ImageConstants.logo.instagram} alt={"instagram-logo"} height={20}
                                       width={20}/>
                            </a>
                        )}
                        {socialLinks.github && (
                            <a href={socialLinks.github} className="text-gray-600 hover:text-blue-600">
                                <span className="sr-only">Github</span>
                                <Image src={ImageConstants.logo.github} alt={"github-logo"} height={20} width={20}/>
                            </a>
                        )}
                        {socialLinks.linkedin && (
                            <a href={socialLinks.linkedin} className="text-gray-600 hover:text-blue-600">
                                <span className="sr-only">LinkedIn</span>
                                <Image src={ImageConstants.logo.linkedIn} alt={"linkedin-logo"} height={20} width={20}/>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </NeonGradientCard>
    </div>
);

const Team: NextPage<LangProps> = async ({params}) => {
    const lang = (await params).lang;

    const teamMembers = [
        {
            name: 'Sulthon Kaffah Al Farizzi',
            role: 'Chief Executive Officer',
            image: ImageConstants.teams.sulthon,
            socialLinks: {
                instagram: '#',
                github: '#',
                linkedin: '#'
            }
        },
        {
            name: 'Joko Supriyanto',
            role: 'Chief Technology Officer',
            image: ImageConstants.teams.joko,
            socialLinks: {
                instagram: '#',
                github: '#',
                linkedin: '#'
            }
        },
        {
            name: 'Muhammad Rafli Silehu',
            role: 'Chief Operation Officer',
            image: ImageConstants.teams.rafli,
            socialLinks: {
                instagram: '#',
                github: '#',
                linkedin: '#'
            }
        }
    ];

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {teamMembers.map((member) => (
                        <TeamMember key={member.name} {...member} />
                    ))}
                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Team;