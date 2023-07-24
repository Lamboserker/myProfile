import "../components/CSS/IconTable.css";

const IconTable = ({ sections }) => {
  const programmingLanguages = sections.filter(
    (section) => section.category === "Programming Languages"
  );
  const webTechnologies = sections.filter(
    (section) => section.category === "Web Technologies"
  );
  const backendTechnologies = sections.filter(
    (section) => section.category === "Backend Technology"
  );
  const packageManagers = sections.filter(
    (section) => section.category === "Package Managers and Version Control"
  );

  return (
    <div className="icon-table-container">
      <div className="icon-column">
        {programmingLanguages.map((section, index) => (
          <div key={index} className="icon-category">
            <img
              src={section.icon}
              alt={`${section.title} Icon`}
              className="icon-image"
            />
            <p>{section.title}</p>
          </div>
        ))}
      </div>
      <div className="icon-column">
        {webTechnologies.map((section, index) => (
          <div key={index} className="icon-category">
            <img
              src={section.icon}
              alt={`${section.title} Icon`}
              className="icon-image"
            />
            <p>{section.title}</p>
          </div>
        ))}
      </div>
      <div className="icon-column">
        {backendTechnologies.map((section, index) => (
          <div key={index} className="icon-category">
            <img
              src={section.icon}
              alt={`${section.title} Icon`}
              className="icon-image"
            />
            <p>{section.title}</p>
          </div>
        ))}
      </div>
      <div className="icon-column">
        {packageManagers.map((section, index) => (
          <div key={index} className="icon-category">
            <img
              src={section.icon}
              alt={`${section.title} Icon`}
              className="icon-image"
            />
            <p>{section.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconTable;
