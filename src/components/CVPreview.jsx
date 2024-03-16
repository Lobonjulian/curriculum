import { MdContactPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import '../styles/CvPreview.css';
export default function CVPreview({ education, experience, personal }) {
  const formatedDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  };
  return (
    <aside className="flex-col">
      <header className="flex-col">
        <div className="name">
          <h1 className="h1-name">{personal[0].firstName}</h1>
          <h1 className="h1-last">{personal[0].lastName}</h1>
        </div>
        <hr />
        <p className="p-job">{personal[0].jobPosition}</p>
        <section className="contact">
          <span>
          <h4>Contacts </h4>
          </span>
          <div className="contact contact-info">
            <p>
              <MdContactPhone /> {personal[0].phone}
            </p>
            <p>
              <MdEmail /> {personal[0].email}
            </p>
            <p><MdLocationOn /> {personal[0].address}</p>
          </div>
        </section>
      </header>

      <section className="flex-col section">
        <h2 className='section'>Education</h2>
        {education.map((item, index) => {
          return (
            <div key={index} className="items-form section">
            <span>
              <p>{formatedDate(item.startDate)}</p>
              <p>{formatedDate(item.endDate)}</p>
            </span>
            <span>
              <p className='title'>{item.degree}</p>
              <p>{item.fieldOfStudy}</p>
              <p className='description'>{item.description}</p>
              </span>
            </div>
          );
        })}
      </section>

      <section className='flex-col'>
        <h2 className='section'>Experience</h2>
        {experience.map((item, index) => {
          return (
            <div key={index} className="items-form">
            <span>
              <p>{formatedDate(item.startDate)}</p>
              <p>{formatedDate(item.endDate)}</p>
            </span>
              <span>
              <p className='title'>{item.job}</p>
              <p>{item.employer}</p>
              <p className='description'>{item.description}</p>
              </span>
            </div>
          );
        })}
      </section>
    </aside>
  );
}
