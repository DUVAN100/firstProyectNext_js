import Layout from '../components/layout';
import Link from "next/link";
import { skills, experiences, projects } from "../profile";



const Index = () =>{
    return(
    <>
        <Layout>
            {/* Header Card */}
            <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
                <div className="row">
                    <div className="col-md-4">
                    <img src="/ryan-ray-profile2.jpeg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                    <h1>Duvan Vivas</h1>
                    <h3>Developer</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae atque ullam perferendis harum, nisi porro voluptate,
                        iste consequuntur enim reprehenderit architecto consectetur cum?
                        Totam ad molestias natus illum illo officia.
                    </p>
                    <Link href="/hireme" passHref={true} legacyBehavior={true}>
                        <p className="btn btn-outline-light">Hire Me</p>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </header>


            <section className="row">
            <div className="col-md-4 py-2">
                <div className="card bg-light animate__animated animate__fadeInLeft">
                <div className="card-body">
                    <h1>Skills</h1>

                    {/* Skill Progress  */}
                    {skills.map(({ skill, percentage }, i) => (
                    <div className="py-3" key={i}>
                        <h5>{skill}</h5>
                        <div className="progress ">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${percentage}%` }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>

            <div className="col-md-8 py-2">
                {/* Experience */}
                <div className="card bg-light animate__animated animate__fadeInRight">
                <div className="card-body">
                    <h1>Experience</h1>

                    <ul>
                    {/* List Item Experience */}
                    {experiences.map(({ title, from, to }, index) => (
                        <li key={index}>
                        <h3>{title}</h3>
                        <h5>
                            {from} {to ? `- ${to}` : "- current"}
                        </h5>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Sint excepturi ea explicabo. Illum suscipit illo, porro
                            quisquam voluptatem officiis fugiat vel animi
                        </p>
                        </li>
                    ))}
                    </ul>
                    <Link href="/hireme" passHref={true} legacyBehavior={true}>
                        <p className="btn btn-light">Know More</p>
                    </Link>
                </div>
                </div>
            </div>
            </section>
            <section>
            <div className="row">
                <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                    <div className="col-md-12 my-2">
                        <h1 className="text-center text-light">Briefcase</h1>
                    </div>
                    {projects.map(({ name, description, image }, index) => (
                        <div className="col-md-4 p-2" key={index}>
                        <div className="card h-100">
                            <div className="overflow">
                            <img
                                src={`/${image}`}
                                alt=""
                                className="card-img-top"
                            />
                            </div>
                            <div className="card-body">
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <p href="#!">Know More</p>
                            </div>
                        </div>
                        </div>
                    ))}

                    <div className="col-md-12 mt-4">
                        <div className="text-center">
                        <Link href="/portfolio" passHref={true} legacyBehavior={true}>
                            <p className="btn btn-outline-light">More Projects</p>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </Layout>
    </>
    )

}
export default Index