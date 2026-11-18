export default function Card() {
    const title="New Year Card";
    const year=new Date().getFullYear();

    return (
        <section>
        <h3>{title}</h3>
        <p>Happy New Year: {year}</p>

        <img src="./images/Newyear2026.jpg"  alt="New Year"/>
        </section>
    );
}



