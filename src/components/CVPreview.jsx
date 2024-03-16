export default function CVPreview({ education, experience, personal }) {
  const formatedDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('es-ES', {
      month: 'long',
      year: 'numeric',
    });
  };
  return (
    <aside>
      <h2>CVPreview</h2>
      <div>
        <div>
          <h1>{personal[0].firstName}</h1>
          <h1>{personal[0].lastName}</h1>
          <p>{personal[0].jobPosition}</p>
          <p>{personal[0].email}</p>
          <p>{personal[0].phone}</p>
          <p>{personal[0].address}</p>
        </div>
        <div>
          <h2>Education</h2>
          {education.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.degree}</p>
                <p>{item.fieldOfStudy}</p>
                <p>{formatedDate(item.startDate)}</p>
                <p>{formatedDate(item.endDate)}</p>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h2>Experience</h2>
          {experience.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.job}</p>
                <p>{item.employer}</p>
                <p>{formatedDate(item.startDate)}</p>
                <p>{formatedDate(item.endDate)}</p>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
