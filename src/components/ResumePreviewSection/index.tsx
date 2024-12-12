export const ResumeSection = ({ formData }) => {
  return (
    <div
      className="bg-white text-black text-[1.2rem] w-[794px] max-w-[794px]"
      id="resume"
    >
      {formData && (
        <div className="flex flex-col gap-5 px-5">
          <div>
            <h2 className="text-3xl font-bold">{formData.fullname}</h2>
            <p className="text-2xl">{formData.position}</p>
          </div>
          <div className="flex flex-col items-end">
            <p> {formData.adress}</p>
            <p> {formData.email}</p>
            <p>{formData.phonenumber}</p>
          </div>
          <div className="font-bold">
            <p>
              {" "}
              Portfólio:{" "}
              <span className="font-normal">{formData.portfolio}</span>
            </p>
            <p>
              LinkedIn: <span className="font-normal">{formData.linkedin}</span>
            </p>
            <p>
              GitHub: <span className="font-normal">{formData.github}</span>
            </p>
          </div>
          <span className="h-[1px] w-full bg-black"></span>
          <div>
            <h2 className="text-2xl font-bold uppercase mb-3">
              Perfil Profissional
            </h2>
            <p>{formData.perfil}</p>
          </div>
          <span className="h-[1px] w-full bg-black"></span>
          <div>
            <h2 className="text-2xl font-bold uppercase mb-3">Qualificações</h2>
            <p> {formData.attributes}</p>
          </div>
          <span className="h-[1px] w-full bg-black"></span>
          <div>
            <h2 className="text-2xl font-bold uppercase mb-3">formação</h2>
            <div className="flex flex-col ">
              {formData.education.map((item, index) => (
                <div key={index} className="mb-3">
                  <p className="font-bold">{item.institution}</p>
                  <p>{item.course}</p>
                  <p>
                    {item.startDate} {!item.startDate ? "" : "-"} {item.endDate}
                  </p>
                  <p>{item.type}</p>
                </div>
              ))}
            </div>
          </div>
          <span className="h-[1px] w-full bg-black"></span>
          <div>
            <h2 className="text-2xl font-bold uppercase mb-3">Cursos</h2>
            <ul>
              {formData.courses.map((item, index) => (
                <li key={index}>{!item ? "" : item}</li>
              ))}
            </ul>
          </div>
          <span className="h-[1px] w-full bg-black"></span>
          <div>
            <h2 className="text-2xl font-bold uppercase mb-3">experiência</h2>
            <div className="flex flex-col">
              {formData.experience.map((item, index) => (
                <div key={index} className="mb-3">
                  <p className="font-bold">{item.enterprise}</p>
                  <p>{item.position}</p>
                  <p>
                    {item.startDate} {!item.startDate ? "" : "-"} {item.endDate}
                  </p>
                </div>
              ))}
            </div>
            <p></p>
          </div>
          <span className="h-[1px] w-full bg-black"></span>
          <div>
            <h2 className="text-2xl font-bold uppercase mb-3">Idioma</h2>
            {/* <p>{formData.language}</p> */}
            {formData.language.map((item, index) => (
              <p key={index}>
                <strong>{item.language}</strong> {!item.language ? "" : "-"}{" "}
                {item.level}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
