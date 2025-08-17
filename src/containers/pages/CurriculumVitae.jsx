import { Link } from 'react-router-dom';

import CVHead from '../../components/CVHead';

const CurriculumVitae = () => (
  <div className="page cv">
    <h2 className="cvname">Kevin Zhang</h2>
    <h3>Experience</h3>
    <div className="i-1 cventry">
      <CVHead left="Riot Games" right="2021-present" />
      <p>Senior Software Engineer on the League Remix Team.</p>
      <ul className="i-2">
        <li>Unannounced social panel feature.</li>
      </ul>
      <p>Senior Software Engineer on the League Client Development Efficiency Team.</p>
      <ul className="i-2">
        <li>
          Aided in network stack debugging for an expired certificates issue plaguing the Korean
          server for a small but nontrivial portion of Korean players.
        </li>
        <ul className="i-3">
          <li>
            Owned the network certificates management after the incident and have since proactively
            prevented further issues with certificates.
          </li>
        </ul>
        <li>Tech lead on Social Panel overhaul.</li>
        <ul className="i-3">
          <li>
            Managed timelines and expectations for reworking extensive tech debt of the social
            panel, dating back to 2015.
          </li>
          <li>
            Lead small strike group of engineers to refactor old web components logic to Ember
            components and services, parallelizing and distributing work and tracking it in JIRA.
          </li>
          <li>
            Delivered in 6 months to players with minimal bugs and greatly improved performance for
            large friends lists.
          </li>
        </ul>
        <li>Introduced automated integration testing to League Client development flows.</li>
        <ul className="i-3">
          <li>Spiked out automated, headful browser tests with Puppeteer.</li>
          <li>
            Worked with Hextech Engine teams to develop an automated Build Verification Test as an
            additional validation step to environment health.
          </li>
          <li>
            Documented and disseminated learnings with larger League Client developer community.
          </li>
          <li>
            Worked with deployment teams to add automated integration tests to the CI/CD pipeline.
          </li>
        </ul>
        <li>
          Trained engineers in Shanghai on League Client frontend flow, development, and debugging
          processes.
        </li>
        <li>
          Developed the profile button rework, working closely with UX designers to ensure the
          migration was as smooth as possible for players.
        </li>
        <li>Tech lead and primary individual contributor on Summoner Name Removal project.</li>
        <ul className="i-3">
          <li>Spiked on initial player name component engineering.</li>
          <li>Developed initial Ember player name component and associated web component.</li>
          <li>
            Spiked batching design to reduce lookup hits to platform APIs in certain edge cases
            where lots of names are looked up, e.g. Ranked Ladders.
          </li>
          <li>Implemented player name component in large majority of the client.</li>
          <li>
            Coordinated with QA engineers and QA lead to test and deliver changes to players by
            patch 13.23.
          </li>
          <li>Managed global rolling release of all changes to each Riot Region.</li>
        </ul>
        <li>
          Removed unused semantic versioning in internal plugins and build pipelines. Internal
          plugins can't register past versions and always depend on the latest versions, so it was
          an archaic step in developing plugins.
        </li>
        <li>
          Cleaned up VNG-Garena migration project. This project concluded as I joined, but carried
          significant tech debt with it.
        </li>
      </ul>
    </div>
    <div className="i-1 cventry">
      <CVHead left="HubSpot" right="2019-2021" />
      <p>Senior Software Engineer I on the Pipelines (Datasets) team.</p>
      <ul className="i-2">
        <li>Developed and rolled out version 2 of the board card customization feature.</li>
        <li>
          Led group effort to revamp acceptance testing for the index and board pages, bringing pass
          rates from 70% to above 95%.
        </li>
        <li>Developed lifecycle stage settings for customer and company pipelines.</li>
        <li>Developed and rolled out batch mutations for custom objects.</li>
        <li>Developed the custom object pipeline settings page from scratch.</li>
        <ul className="i-3">
          <li>Managed the beta release for custom object pipeline settings.</li>
          <li>Set up the app with fresh GraphQL endpoints using the Apollo client.</li>
          <li>Set up legacy object type support.</li>
        </ul>
        <li>
          Part of the team developing the index page redesign, a year-long effort that resulted in
          significant performance gains for end users and cleaned up archaic, difficult to navigate
          code.
        </li>
        <li>
          Developed and released version 2 of the recycle bin for standard and custom objects.
        </li>
        <li>
          Concluded various performance A/B tests to optimize the index page redesign for customers.
        </li>
        <li>Helped develop key deliverables in table and board redesign.</li>
        <li>Developed shepherding tour for table and board redesign.</li>
      </ul>
    </div>
    <div className="i-1 cventry">
      <CVHead left="Federated Wireless" right="2017-2019" />
      <p>Software Developer on the Cloud Engineering team.</p>
      <ul className="i-2">
        <li>Responsible for major frontend features on the customer-facing web portal.</li>
        <li>Developed an end-to-end testing framework using Selenium WebDriver and Grunt.</li>
        <li>
          Developed key performance indicator scripts, used to track SLA targets for customers.
        </li>
        <li>
          Developed a monitoring daemon deployed to AWS ECS, reading upwards of 15K messages per
          minute and alerting CloudWatch to errant behavior.
        </li>
        <li>
          Lead a team to develop a new, engineer-focused web portal for a contractor, primarily
          using React, Redux, and Webpack. Focuses included accessibility, wide browser support, and
          modern coding style guidelines using ESLint and Prettier.
        </li>
        <li>
          Helped direct key infrastructure changes in the cloud environment to scale up to over
          100,000 concurrent devices, paginating API responses and handling them properly on the web
          portal.
        </li>
        <li>
          Co-developed key analytic components for network engineers, focusing on readability and
          performance.
        </li>
        <li>Handled a full deployment of all services and documented the process for newcomers.</li>
      </ul>
    </div>
    <div className="i-1 cventry">
      <CVHead left="Kronos Incorporated" right="Summer 2016" />
      <p>Software engineer intern under Rishi Kurra.</p>
      <ul className="i-2">
        <li>
          Updated logging software in the printing middleware and reprioritized existing logging
          statements.
        </li>
        <li>
          Fixed deployment bug with original Log4j integration, preventing developers from filtering
          logs.
        </li>
        <li>
          Developed a parallel printing feature handled in the middleware, allowing employee
          payrolls to be printed across multiple selected printers.
        </li>
      </ul>
    </div>
    <div className="i-1 cventry">
      <CVHead left="Federated Wireless" right="Summer 2015" />
      <p>Software engineer intern under James Ni.</p>
      <ul className="i-2">
        <li>
          Refactored the entire modules and configuration components, focusing on compatibility and
          flexbility.
        </li>
        <li>
          Developed an extensible framework to configure and communicate with SAS through an
          external client using RabbitMQ and JSON-RPC.
        </li>
        <li>
          Developed a command-line interface client to SAS with the Apache CLI library and RabbitMQ,
          allowing an end user to configure SAS without requiring direct access to deployment.
        </li>
      </ul>
    </div>
    <h3>Education</h3>
    <div className="i-1 cventry">
      <CVHead left="Rensselaer Polytechnic Institute" right="2014-2017" />
      <p>B.S. in Computer Science</p>
      <ul className="i-2">
        <li>LLVM Compiler Case Study</li>
        <li>Parallel Programming</li>
        <li>Software Design & Development</li>
        <li>Operating Systems</li>
        <li>Programming Languages</li>
        <li>Introduction to Algorithms</li>
        <li>Foundations of Computer Science</li>
        <li>Introduction to Data Structures</li>
      </ul>
    </div>
    <h3>Skills</h3>
    <div className="i-1 cventry">
      <ul className="i-1">
        <li>JS (ESM + CJS)</li>
        <ul className="i-1">
          <li>Ember</li>
          <li>React</li>
          <li>Redux</li>
        </ul>
        <li>HTML5 & CSS3</li>
        <li>Python</li>
        <li>C++</li>
        <li>Java</li>
        <li>Linux</li>
        <li>
          AWS
          <ul className="i-1">
            <li>ECS</li>
            <li>IAM</li>
            <li>SQS</li>
            <li>Lambda</li>
            <li>API Gateway</li>
            <li>CloudFormation</li>
            <li>CloudWatch</li>
            <li>DynamoDB</li>
            <li>Elasticsearch</li>
            <li>Batch</li>
          </ul>
        </li>
        <li>Adobe Photoshop</li>
        <li>Adobe InDesign</li>
        <li>Clip Studio Paint（クリスタ）</li>
      </ul>
    </div>
    <p>
      <Link to="/who">back</Link>
    </p>
  </div>
);

CurriculumVitae.propTypes = {};

export default CurriculumVitae;
