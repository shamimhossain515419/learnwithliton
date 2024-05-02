import './SectionTitle.css';
const SectionTitle = ({
  title_1,
  title_2,
  title_3,
  size,
  alignment,
  paragraph,
}) => {
  return (
    <div className={` ${alignment} sectionTitle `}>
      <h1 className={`${size} `}>
        {' '}
        {title_1} <span>{title_2} </span>
        {title_3}{' '}
      </h1>
      <p className=" py-2"> {paragraph}</p>
    </div>
  );
};

export default SectionTitle;
