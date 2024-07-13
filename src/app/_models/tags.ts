
export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#5a7581');
    static readonly JAVA = new Tag('Java', '#5a7581');
    static readonly SPRINGBOOT = new Tag('Spring Boot', '#5a7581');
    static readonly SPRINGSECURITY = new Tag('Spring Security', '#5a7581');
    static readonly SPRINGJWT = new Tag('Spring JWT', '#5a7581');
    static readonly SPRINGWEB = new Tag('Spring Web', '#5a7581');
    static readonly LOMBOK = new Tag('Lombok', '#5a7581');
    static readonly JPA = new Tag('JPA', '#5a7581');
    static readonly JDBC = new Tag('JDBC', '#5a7581');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#4a6a77')
    static readonly MySQL = new Tag('MySQL', '#4a6a77');
    static readonly SQLALCHEMY = new Tag('SQLAlchemy', '#4a6a77');
    static readonly PYTHON = new Tag('Python', '#4a6a77');
    static readonly FLASK = new Tag('Flask', '#4a6a77');
    static readonly BEAUTIFULSOUP = new Tag('Beautiful Soup', '#4a6a77');
    static readonly CYPRESS = new Tag('Cypress', '#4a6a77');
    static readonly SEQUELIZE = new Tag('Sequelize', '#4a6a77');
    static readonly NgINX = new Tag('NgINX', '#4a6a77');
    static readonly EXPRESS_JS = new Tag('Express.JS', '#4a6a77');
    static readonly NEST_JS = new Tag('Nest.JS', '#4a6a77');
    static readonly RESTAPI = new Tag('Rest API', '#4a6a77');
    static readonly INSOMNIA = new Tag('Insomnia', '#4a6a77');
    static readonly POSTMAN = new Tag('Postman', '#4a6a77');
    static readonly TYPESCRIPT = new Tag('Typescript', '#4a6a77');
    static readonly JAVASCRIPT = new Tag('Javascript', '#4a6a77');
    static readonly HTML5 = new Tag('HTML5', '#4a6a77');
    static readonly CSS3 = new Tag('CSS3', '#4a6a77');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#4a6a77');
    static readonly PYTEST = new Tag('Pytest', '#4a6a77');
    static readonly JUNIT = new Tag('JUnit', '#5a7581');
    static readonly MOCKITO = new Tag('Mockito', '#5a7581');
    static readonly DOCKER = new Tag('Docker', '#4a6a77');
    static readonly DOCKERCOMPOSE = new Tag('Docker Compose', '#4a6a77');
    static readonly NODE_JS = new Tag('Node.JS', '#4a6a77');
    static readonly HIBERNATE = new Tag('Hibernate', '#5a7581');
    static readonly FASTAPI = new Tag('FastAPI', '#4a6a77');
    static readonly SQLITE = new Tag('SQLite', '#4a6a77');






    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}