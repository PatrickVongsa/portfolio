export const sectionContents = {
    heroSection: {
        topTitle: "Bonjour !",
        title: "Je suis Patrick VONGSA,",
        titleHighlight:"développeur web",
        description: [
            "Découvrez mes projets et compétences. Bienvenue sur mon portfolio."
        ],
    },
    aboutMeSection: {
        title: "À propos de moi",
        content: [
            "Un peu d’histoire, avant que j’effectue ma reconversion.",
            "J’ai travaillé dans l’aéronautique en tant que support technique à la production. j’ai occupé ce poste pendant à peu près 7ans. J’ai eu la chance de pouvoir travailler sur plusieurs programme avion tel que l’A320, A330, A350 et A380. J’ai aussi eu la chance de travaillé au Canada pendant 2 ans chez Bombardier sur le programme Global 7500.",
            "Suite au COVID, j’ai décidé de changer de secteur pour devenir développeur web. J’ai choisi ce secteur car j’ai toujours en tête de repartir au Canada.",
            "J’ai alors suivi une formation de 5 mois où j’ai appris les bases du développement web comme le HTML, CSS, JavaScript. Puis nous avons approffondie ces connaissance et avons appris PHP et le framework Symfony. ",
            "J’ai suivi une formation d’un an en alternance pour approfndir et découvrir d’autre technologie, par exemple la MERN stack et le GraphQL API.",
            "Je suis actuellement développeur web full stack (backend et frontend) dans l’agence Web où j’ai effectué mon alternance. j’y ai pu découvrir Wordpress et Prestashop.",
        ],
    },
    skillsSection: {
        title: "Mes compétences",
        content: [
            "Mon parcours en développement web est le reflet de mon évolution constante au travers de l'apprentissage et de la pratique.",
            "Mes compétences comprennent les bases telles qu'HTML, CSS, et JavaScript, ainsi que des technologies plus avancées comme React, Node.js et Symfony 5.",
            "Mon expérience en formation et mes projets personnels m'ont permis de développer un ensemble de compétences polyvalentes en développement Front-End et Back-End, et en gestion de bases de données avec MySQL et MongoDB.",
            "Je suis conscient que le chemin vers l'expertise est long, mais ma passion pour l'apprentissage continu continue à façonner ma croissance dans le domaine du développement web.",
        ],
    },
    projectsSection: {
        title: "Mes projets personnels",
        projects: [
            {
                title: "Outils de gestion",
                context: "Projet préparé en vue du passage pour le titre Concepteur Développeur d’Application",
                description: [
                    "Ce projet permet de faire un suivi de ses prospects / clients ainsi que les projets qui leurs sont attachés.",
                    "Ce projet est une API en Node.js/Express et Prisma avec une base de données MySQL pour le Back-end. Pour le Front c’est une Application React.js.",
                    "L’un des challenges ici, a été de mettre en place redux, react hook form parce que ce sont des librairies connues mais que je n’avais pasréellement essayé d’implémenter...",
                    "Ce qu’il reste encore à faire, mettre en place les GitHub actions, docker, et le déploiement sur un serveur",
                    "Technologies utilisées :",
                ],
                technologies: [
                    "Figma",
                    "Node.js / Express.js",
                    "Prisma ORM",
                    "Base de données MySQL",
                    "React.js",
                    "Tailwind",
                ],
                gitHubLink: "https://github.com/PatrickVongsa/cda-titre-pro",
            },
            {
                title: "My Skateshop",
                context: "Projet présenté pour l’obtention du titre Développeur web et web mobile",
                description: [
                    "My Skateshop est un projet que j’ai mené seul, de la maquette au dev.",
                    "Ce projet m’a permis d’approfondir mes connaissance sur Symfony 5. La gestion des cookies par exemple, sujet que l’on avait pas abordé techniquement lors de ma formation de 5 mois.",
                    "Technologies utilisées :",
                ],
                technologies: [
                    "Figma",
                    "Symfony 5",
                    "Doctrine ORM",
                    "Base de données MySQL",
                    "Twig",
                    "Bootstrap 5",
                ],
                gitHubLink: "https://github.com/PatrickVongsa/myskateshop-fullsymfony",
            },
        ],
    },
    experiencesSection: {
        title: "Mes expériences",
        description: "Découvrez mon parcours professionnel, de l'aéronautique au développement web, et explorez les étapes clés de mon cheminement vers une carrière passionnante dans le monde du code.",
        experiences: [
            {
                type: "work",
                timePeriod: "Janvier 2022 - Ajourd’hui",
                occupation: "Développeur Web Fullstack",
                companyLocation: "Webgo Agency - Toulouse (FRANCE)",
                description: [
                    "Création et refonte de site web et Création application dans une agence web :",
                ],
                tasks: [
                    "Base de données avec MySQL et PHPMyAdmin",
                    "HTML, CSS, JavaScript, JQuery, GitHub",
                    "Wordpress et Prestashop",
                    "React, Node/Express, Next.js",
                    "Déploiement sur serveur mutualisé et VPS (debian)",
                ],
            },
            {
                type: "education",
                timePeriod: "Mars 2022 - Mars 2023",
                occupation: "Concepteur Développeur d’Application",
                companyLocation: "Wild Code School - Formation remote (FRANCE)",
                description: [
                    "équivalent Bac +3/4 et inscrit au RNCP (passage du titre non effectué)",
                ],
                tasks: [],
            },
            {
                type: "work",
                timePeriod: "Août 2021 - Janvier 2022",
                occupation: "Stage Développeur Web",
                companyLocation: "CapiLog - Toulouse (FRANCE)",
                description: [
                    "Création et amélioration de l application web :",
                ],
                tasks: [
                    "Base de données avec MySQL et PHPMyAdmin",
                    "HTML, CSS, JavaScript, JQuery, PHP, Gitlab.",
                ],
            },
            {
                type: "education",
                timePeriod: "Mars 2021 - Juillet 2021",
                occupation: "Développeur Web et Mobile",
                companyLocation: "Wild Code School - Formation à Toulouse (FRANCE)",
                description: [
                    "équivalent Bac +2 et inscrit au RNCP (Obtention Février 2022)",
                ],
                tasks: [],
            },
            {
                type: "work",
                timePeriod: "novembre 2020 - Mars 2021",
                occupation: "Période d’autoformation",
                companyLocation: "Toulouse (FRANCE)",
                description: [
                    "En attente de la session de formation au développement web, je me suis formé en auto-didacte grâce au cours en ligne Open Classroom. J’ai survolé les cours du parcours de développeur web pour connaître les bases.",
                ],
                tasks: [],
            },
            {
                type: "turn",
                timePeriod: "Novembre 2021",
                occupation: "",
                companyLocation: "",
                description: [
                    "Transition de l’aéronautique vers le développemnt web",
                ],
                tasks: [],
            },
            {
                type: "work",
                timePeriod: "2013 - 2020",
                occupation: "Préparateur Structure, Support Technique, Planificateur",
                companyLocation: "Aéronautique - Toulouse (FR), Toronto et Montréal (CA)",
                description: [
                    "Compétences transverses :",
                ],
                tasks: [
                    "Résolution de problèmes",
                    "Recherche de documents techniques",
                    "Communication",
                    "Gestion de stress",
                    "Autonomie",
                    "Adaptabilité",
                    "Respect des processus mis en place",
                    "Planification du travail en fonction des contraintes.",
                ],
            },
            {
                type: "education",
                timePeriod: "Obtention 2011",
                occupation: "Diplôme Universitaire Technique en Génie Mécanique et Productique spécialité Technique Aérospatiale",
                companyLocation: "Université Paul Sabatier - Toulouse (FRANCE)",
                description: [
                    "Bac +2",
                ],
                tasks: [],
            },
        ],
    },
    contactSection: {
        title: "Me Contacter",
        content: [
            "Pour toute question, proposition de collaboration ou simplement pour échanger, n'hésitez pas à me contacter via LinkedIn ou en remplissant le formulaire ci-dessous. Je suis toujours heureux de discuter et d'établir de nouvelles connexions.",
        ],
    }
}