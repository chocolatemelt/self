import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CVHead from '../../components/CVHead';

const CurriculumVitae = () => (
  <div className="page cv">
    <h2 className="cvname">Kevin Zhang</h2>
    <h3>Experience</h3>
    <div className="i-1">
      <CVHead left="Federated Wireless" right="2017-2019" />
      <p>Frontend and software developer on the cloud engineering team.</p>
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
    <div className="i-1">
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
    <div className="i-1">
      <CVHead left="Federated Wireless" right="Summer 2015" />
      <p>Software engineer intern under James Ni.</p>
      <ul className="i-2">
        <li>
          Performed large-scale class refactoring, cutting code down by around 3MB and making it
          more coherent and flexible.
        </li>
        <li>
          Developed an extensible framework to configure and communicate with SAS through an
          external client using RabbitMQ and JSON-RPC.
        </li>
        <li>
          Developed a command-line interface client to SAS with the Apache CLI library and RAbbitMQ,
          allowing an end user to configure SAS without requiring direct access to deployment.
        </li>
      </ul>
    </div>
    <h3>Education</h3>
    <div className="i-1">
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
    <div className="i-1">
      <ul className="i-1">
        <li>C++14</li>
        <li>JS (ES2015)</li>
        <li>HTML5 & CSS3</li>
        <li>Python</li>
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
            <li>boto3</li>
          </ul>
        </li>
        <li>Adobe Photoshop</li>
        <li>Adobe InDesign</li>
        <li>Clip Studio Paint（クリスタ）</li>
      </ul>
    </div>
    <p className="br">
      <Link to="/who">back</Link>
    </p>
  </div>
);

CurriculumVitae.propTypes = {
  history: PropTypes.shape({
    length: PropTypes.number,
    action: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      key: PropTypes.string,
    }),
    goBack: PropTypes.func,
  }).isRequired,
};

export default CurriculumVitae;
