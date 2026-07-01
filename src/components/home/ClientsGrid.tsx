import Image from "next/image";

type Client = {
    name: string;
    file: string;
};

const clients: Client[] = [
    { name: "Appstar", file: "appstar.png" },
    { name: "As-Sunnah", file: "as-sunnah.png" },
    { name: "Balloon", file: "balloon.png" },
    { name: "Bdot Color", file: "bdot-color.png" },
    { name: "Capital FM", file: "capitalfm.png" },
    { name: "Chkware", file: "chkware.png" },
    { name: "Cyberz", file: "cyberz.png" },
    { name: "Eloy Lab", file: "eloylab.png" },
    { name: "MLBD", file: "mlbd.png" },
    { name: "MLES", file: "mles.png" },
    { name: "Monta", file: "monta.png" },
    { name: "Namco", file: "namco 1.png" },
    { name: "Neom", file: "neom.png" },
    { name: "Nspec", file: "nspec-logo.png" },
    { name: "Pocket", file: "pocket.png" },
    { name: "Prayers", file: "prayers.png" },
    { name: "Sagawa", file: "sagawa.png" },
    { name: "SDC", file: "SDC.png" },
    { name: "Sunstar", file: "sunstar-logo.png" },
    { name: "TAGNPAC", file: "TAGNPAC.png" },
    { name: "Taikyo", file: "taikyo.png" },
    { name: "Tokup", file: "tokup.png" },
    { name: "Typewriting", file: "typewriting.png" },
];

export default function ClientsGrid() {
    return (
        <section className="lc-section" aria-label="Brands we have worked with">
            <p className="lc-eyebrow">Brands we&rsquo;ve worked with</p>

            <ul className="lc-grid">
                {clients.map((c) => (
                    <li key={c.file} className="lc-item">
                        <Image
                            src={`/content/clients/${c.file}`}
                            alt={c.name}
                            width={140}
                            height={40}
                            className="lc-logo"
                            sizes="(min-width: 900px) 160px, (min-width: 600px) 120px, 33vw"
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}