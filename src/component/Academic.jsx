import { Accordion } from "flowbite-react";

export function Academic() {
    return (
        <div className="p-4 rounded-lg shadow-md m-10" id="academic">
            <h1 className="name-language text-4xl font-semibold mb-4 text-center" data-aos="fade-up">Academic</h1>
            <Accordion>
                <Accordion.Panel>
                    <div data-aos="fade-right">
                        <Accordion.Title>Elementary School</Accordion.Title>
                        <Accordion.Content className="dark:bg-white">
                            <p className="text-black">
                                <strong>SD Kemah Indonesia.</strong>
                                A graduate of SD Kemah Indonesia in the 2020-2021 academic year, I completed my elementary education at one of the leading elementary schools in Cibadak, Astanaanyar District, Bandung City, West Java. During the 2015-2020 period, SD Kemah Indonesia provided quality education to its students, including myself. Through a comprehensive curriculum and an innovative learning approach, the school helped me develop the knowledge, skills, and character needed to succeed in the future. As a graduate of SD Kemah Indonesia, I am proud of my achievements and ready to continue my educational journey to higher levels.
                            </p>
                        </Accordion.Content>
                    </div>
                </Accordion.Panel>
                <Accordion.Panel>
                    <div data-aos="fade-left">
                        <Accordion.Title>Junior High School</Accordion.Title>
                        <Accordion.Content className="dark:bg-white">
                            <p className="text-black">
                                <strong>SMP Pasundan 01 Bandung.</strong>
                                As a graduate of SMP Pasundan 01 Bandung in the 2023-2024 academic year, I completed my junior high school education at one of the prominent junior high schools in Bandung. SMP Pasundan 01 Bandung is accredited with an "A" rating and has a qualified and experienced teaching staff. During my studies, I participated in distance learning (PJJ) or online learning (BDR) in response to the large-scale social restrictions (PSBB) enforced due to the Covid-19 pandemic. Graduating from SMP Pasundan 01 Bandung has provided me with the knowledge and skills that will help me continue my education to higher levels.
                            </p>
                        </Accordion.Content>
                    </div>
                </Accordion.Panel>
                <Accordion.Panel>
                    <div data-aos="fade-right">
                        <Accordion.Title>Vocational High School</Accordion.Title>
                        <Accordion.Content className="dark:bg-white">
                            <p className="mb-2 text-black">
                                <strong>SMK Prakarya Internasional.</strong>
                                I am currently attending SMK Prakarya Internasional with a major in <strong>Software and Game Development.</strong> This major offers a program focused on software development and game creation. At SMK Prakarya Internasional, I am learning about programming, web development, game programming with Unity, and other related technologies. I am very excited to develop my skills and knowledge in this field, as I believe the software and game industries have great potential and are exciting for my future career.
                            </p>
                        </Accordion.Content>
                    </div>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
}
