import React from "react";
import TextCard from "../components/TextCard";

class ResourcesPage extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="resources">
          <div id="title">
            <h3 style={{ marginBottom: "0" }}>Resources</h3>
          </div>
          <TextCard
            className="resource"
            header="If you or a loved one need immediate help"
          >
            <p>
              Please <b>call 911</b> and inform the operator this is a{" "}
              <b>psychiatric emergency</b> and you require an officer trained in
              crisis intervention, or go to your nearest emergency room.
            </p>
            <p>Other phone numbers to call (in the United States) include</p>
            <ul>
              <li>
                National Suicide Prevention Lifeline – 1-800-273-TALK (8255)
              </li>
              <li>
                National Domestic Violence Hotline – 1-800-799-SAFE (7233)
              </li>
              <li>National Sexual Assault Hotline – 1-800-656-HOPE (4673)</li>
              <li>NAMI crisis text line – text "NAMI" to 741-741</li>
            </ul>
          </TextCard>
          <TextCard
            className="resource"
            header="Depression and Bipolar Support Alliance (DBSA)"
          >
            <p>
              <a
                href="http://www.dbsalliance.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                DBSA
              </a>{" "}
              (
              <a
                href="http://www.dbsalianza.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                español
              </a>
              ) is a peer-led support organization with a nation-wide network of
              hundreds of support groups. In addition to peer facilitated
              support groups, DBSA provides online and print educational
              materials and sponsors additional events.
            </p>
          </TextCard>
          <TextCard
            className="resource"
            header="National Alliance on Mental Illness (NAMI)"
          >
            <p>
              <a
                href="https://www.nami.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                NAMI
              </a>{" "}
              is a non-governmental mental health organization dedicatd to
              mental health education and advocacy. NAMI offers help and support
              to those with a mental illness as well as families and loved ones
              affected. Through NAMI, you can find educational courses, support
              groups, and a crisis text line (text "NAMI" to 741-741 to be
              connected with a trained crisis counselor).
            </p>
          </TextCard>
          <TextCard className="resource" header="Metanoia.org">
            <p>
              While the website is terrifically dated and not at all a source of
              professional aid, I (Kyle) have found{" "}
              <a
                href="https://www.metanoia.org/suicide/"
                target="_blank"
                rel="noopener noreferrer"
              >
                one particular page
              </a>{" "}
              to be useful to me time and again when in the midst of a deep
              depression. Don't forget to read some corny{" "}
              <a
                href="https://www.metanoia.org/suicide/jokes.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                jokes
              </a>{" "}
              when you visit.
            </p>
          </TextCard>
          <TextCard className="resource" header="Addiction Resource">
            <p>
              <a
                href="https://addictionresource.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Addiction Resource
              </a>{" "}
              was founded in 2014 to provide a community for those recovering
              from addiction and to help patients find the highest quality care
              for a successful recovery. Their goal is to provide resources to
              help patients and their loved ones so that they may stay on the
              road to recovery, and can successfully overcome addiction for
              life.
            </p>
          </TextCard>
        </div>
      </div>
    );
  }
}

export default ResourcesPage;
