import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import TeamGrid from "@/components/parts/teamcard";
export default function Teams() {
    const admin = [
        {
            name: 'Program Lead',
            head_name: 'Rahul Rao',
            image: '/leads/Rahul.png',
        },
        {
            name: 'Operations Lead',
            head_name: 'Brian Hulbert',
            image: '/leads/Brian.jpg',
        },
    ];
    const teams = [
        {
            name: 'Space Mechanics',
            head_name: 'Logan Cuthill, Alex Chiommino',
            image: '/leads/LoganAndAlex.png',
        },
        {
            name: 'Systems',
            head_name: 'Angelika Bouley',
            image: '/leads/Angelika.jpg',
        },
        {
            name: 'Electrical',
            head_name: 'Jack Hester',
            image: '/leads/Jack.jpg',
        },
        {
            name: 'Flight Operations',
            head_name: 'Aaron Muldrew',
            image: '/leads/Aaron.jpg',
        },
        {
            name: 'Media and External Affairs',
            head_name: 'Julianne Blackman',
            image: '/leads/Julianne.jpeg',
        },
    ];
    return (
        <Layout meta={{ title: "Teams - Project Horizon", description: "Northeastern's first in-house developed satellite. The first of its kind.", image: "/banner.png" }}>
            <motion.div
                className="px-5 py-10 mx-auto max-w-7xl"
                initial="hidden"
                whileInView="show"
                animate="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >

                <motion.h1
                    className="m-10 bg-white bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                    Administration
                </motion.h1>
                <TeamGrid teams={admin}/>
                <motion.h1
                    className="m-10 bg-white bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                    Teams
                </motion.h1>
                <TeamGrid teams={teams}/>
                </motion.div>
        </Layout>
    );
}