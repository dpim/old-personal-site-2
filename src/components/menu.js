const Menu = (title) => (
    <main>
        <div className="link-menu">
            <a href="/">About</a>
            <a href="/projects">Projects</a>
            <a href="/resume">Résumé</a>
            <a href="/contact">Contact</a>
        </div>
        <h1 className="title">
            {title}
        </h1>
    </main>
);

export default Menu;
