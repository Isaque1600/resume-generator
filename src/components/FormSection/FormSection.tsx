import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useState } from "react";
import { FormRoot } from "../Form/FormRoot";
import { InputRoot } from "../Inputs/InputRoot";
import { ResumeSection } from "../ResumePreviewSection";
import { SelectRoot } from "../Selects/SelectRoot";
import { SelectEducationItem } from "./SelectEducationItem";
import { EducationTypeList } from "./SelectEductionItemList";
import { SelectionLanguageItem } from "./SelectLanguageItem";
import { LanguageList, LevelList } from "./SelectLanguageType";
import {
  FormDataProps,
  initialValueFormData,
  TEducation,
  TExperience,
  TLanguage,
} from "./types";

export const FormSection = () => {
  const [formData, setFormData] = useState<FormDataProps>(initialValueFormData);
  const [course, setCourse] = useState<string>("");
  const [isExperience, setIsExperience] = useState<TExperience>({
    enterprise: "",
    position: "",
    startDate: "",
    endDate: "",
  });
  const [isEducation, setIsEducation] = useState<TEducation>({
    course: "",
    endDate: "",
    institution: "",
    startDate: "",
    type: "",
  });
  const [isLanguage, setIsLanguage] = useState<TLanguage>({
    language: "",
    level: "",
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddCourse = () => {
    if (!course) return;

    setFormData({ ...formData, courses: [...formData.courses, course] });
    setCourse("");
  };

  const handleExperience = () => {
    if (!isExperience) return;

    setFormData({
      ...formData,
      experience: [...formData.experience, isExperience],
    });
    console.log(formData);
    setIsExperience({
      enterprise: "",
      position: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleEducation = () => {
    if (!isEducation) return;

    setFormData({
      ...formData,
      education: [...formData.education, isEducation],
    });

    console.log(isEducation);

    setIsEducation({
      course: "",
      endDate: "",
      institution: "",
      startDate: "",
      type: "",
    });
  };

  const handleLanguage = () => {
    if (!isLanguage) return;

    setFormData({ ...formData, language: [...formData.language, isLanguage] });
    console.log(formData);
    setIsLanguage({
      language: "",
      level: "",
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const generateResume = async () => {
    const element = document.getElementById("resume");
    if (!element) return;
    if (!formData) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("resume/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeigth = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeigth);

    pdf.save(formData.fullname);
    setFormData(initialValueFormData);
  };

  return (
    <section className="flex flex-col w-full items-center p-10 space-y-2">
      <h1 className="text-3xl font-bold">Construtor de Currículo</h1>
      <FormRoot.root
        className="gap-4 w-3/4 flex flex-col border-2 rounded-md border-blue-700 bg-gradient-to-tl from-blue-900 to-blue-600 p-4"
        onSubmit={handleSubmit}
      >
        <fieldset className="flex flex-col gap-5 border-2 rounded-md border-blue-900 p-4">
          <legend className="text-2xl capitalize">Informações pessoais</legend>

          <FormRoot.container className="flex-wrap w-full gap-y-4">
            <InputRoot.root
              wrapperClassName="max-w-[20rem] w-full"
              labelText="Nome Completo"
              name="fullname"
              placeholder="Nome Completo"
              onChange={handleOnChange}
            />
            <InputRoot.root
              wrapperClassName="flex-grow"
              labelText="Cargo Desejado"
              name="position"
              placeholder="Cargo Desejado"
              onChange={handleOnChange}
            />
            <div className="flex w-full gap-2">
              <InputRoot.root
                wrapperClassName="w-1/2"
                labelText="E-mail"
                name="email"
                placeholder="exemplo@exemplo.com"
                onChange={handleOnChange}
              />
              <InputRoot.root
                wrapperClassName="w-1/2"
                labelText="Telefone para contato"
                name="phonenumber"
                placeholder="+55(00)99999-9999"
                onChange={handleOnChange}
              />
            </div>
          </FormRoot.container>

          <FormRoot.container>
            <InputRoot.root
              wrapperClassName="w-full"
              labelText="Endereço"
              name="adress"
              placeholder="R. Exemplo, 1 - Bairro, Cidade/Estado"
              onChange={handleOnChange}
            />
          </FormRoot.container>

          <FormRoot.container>
            <InputRoot.wrapper classname="w-full gap-2">
              <InputRoot.label className="text-lg" htmlFor="links">
                Links
              </InputRoot.label>
              <div className="w-full flex gap-2">
                <InputRoot.singleInput
                  placeholder="LinkedIn"
                  id="links"
                  name="linkedin"
                  className="w-1/3"
                  onChange={handleOnChange}
                />
                <InputRoot.singleInput
                  placeholder="Github"
                  name="github"
                  className="w-1/3"
                  onChange={handleOnChange}
                />
                <InputRoot.singleInput
                  placeholder="Portfolio"
                  name="portfolio"
                  className="w-1/3"
                  onChange={handleOnChange}
                />
              </div>
            </InputRoot.wrapper>
          </FormRoot.container>

          <FormRoot.container>
            <InputRoot.root
              wrapperClassName="w-1/2"
              labelText="Perfil Profissional"
              name="perfil"
              placeholder="Perfil Profissional"
              onChange={handleOnChange}
            />
            <InputRoot.root
              wrapperClassName="w-1/2"
              labelText="Tecnologias/Habilidades"
              name="attributes"
              placeholder="Ex: React | Next.js | NodeJS"
              onChange={handleOnChange}
            />
          </FormRoot.container>
        </fieldset>

        <fieldset className="flex flex-col gap-5 border-2 rounded-md border-blue-900 p-4">
          <legend className="text-2xl capitalize">Formação Acadêmica</legend>
          <FormRoot.container className="flex-wrap w-full gap-y-4">
            <div className="w-full flex gap-2">
              <InputRoot.wrapper classname="w-1/2">
                <InputRoot.label className="text-lg" htmlFor="education">
                  Curso
                </InputRoot.label>
                <InputRoot.singleInput
                  id="education"
                  placeholder="Ex: Ciência de como jogar manga na lua"
                  value={isEducation.course}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setIsEducation({ ...isEducation, course: e.target.value })
                  }
                  name="education"
                  className="w-full"
                />
              </InputRoot.wrapper>
              <InputRoot.wrapper classname="w-1/2">
                <InputRoot.label className="text-lg" htmlFor="institution">
                  Instituição
                </InputRoot.label>
                <InputRoot.singleInput
                  id="institution"
                  placeholder="Ex: Faculdade Federal de Capichaba do Norte"
                  value={isEducation.institution}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setIsEducation({
                      ...isEducation,
                      institution: e.target.value,
                    })
                  }
                  name="education"
                  className="w-full"
                />
              </InputRoot.wrapper>
            </div>
            <div className="w-full flex gap-2">
              <InputRoot.wrapper classname="w-1/3">
                <InputRoot.label className="text-lg" htmlFor="initial_date">
                  Data de Inicio
                </InputRoot.label>
                <InputRoot.singleInput
                  id="initial_date"
                  type="date"
                  value={isEducation.startDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setIsEducation({
                      ...isEducation,
                      startDate: e.target.value,
                    })
                  }
                  name="education"
                  className="w-full"
                />
              </InputRoot.wrapper>
              <InputRoot.wrapper classname="w-1/3">
                <InputRoot.label className="text-lg" htmlFor="final_date">
                  Data de Termino
                </InputRoot.label>
                <InputRoot.singleInput
                  id="final_date"
                  type="date"
                  value={isEducation.endDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setIsEducation({
                      ...isEducation,
                      endDate: e.target.value,
                    })
                  }
                  name="education"
                  className="w-full"
                />
              </InputRoot.wrapper>
              <SelectRoot.wrapper classname="w-1/3">
                <SelectRoot.label className="text-lg">
                  Tipo de Formação
                </SelectRoot.label>
                <SelectRoot.root
                  value={isEducation.type}
                  name="CourseType"
                  onValueChange={(event: string) =>
                    setIsEducation({ ...isEducation, type: event })
                  }
                >
                  <SelectRoot.trigger placeholder="Tipo de Formação" />
                  <SelectRoot.content className="bg-blue-600 border-blue-700 text-white">
                    {EducationTypeList.map((item, index: number) => (
                      <SelectEducationItem
                        value={item.name}
                        key={index}
                        content={item.name}
                        className="focus:bg-blue-800 focus:text-white"
                      />
                    ))}
                  </SelectRoot.content>
                </SelectRoot.root>
              </SelectRoot.wrapper>
            </div>
            <div className="flex w-full justify-center pt-2">
              <Button
                className="w-fit p-6 text-lg bg-violet-600 hover:bg-violet-700 hover:scale-105 transition-all 0.2s ease-in-out"
                onClick={handleEducation}
              >
                Adicionar Formação
              </Button>
            </div>
          </FormRoot.container>
        </fieldset>

        <fieldset className="flex flex-col gap-5 border-2 rounded-md border-blue-900 p-4">
          <legend className="text-2xl capitalize">
            Formações Complementares
          </legend>

          <FormRoot.container className="flex-col gap-y-4">
            <InputRoot.root
              wrapperClassName="w-1/2"
              labelText="Cursos e Qualificações Complementares"
              name="courses"
              placeholder="Curso"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
            <div className="flex w-full justify-center pt-2">
              <Button
                className="w-fit p-6 text-lg bg-violet-600 hover:bg-violet-700 hover:scale-105 transition-all 0.2s ease-in-out"
                onClick={handleAddCourse}
              >
                Adicionar Curso
              </Button>
            </div>
          </FormRoot.container>
        </fieldset>

        <fieldset className="flex flex-col gap-5 border-2 rounded-md border-blue-900 p-4">
          <legend className="text-2xl capitalize">Experiencias</legend>

          <FormRoot.container className="flex-col">
            <div className="flex w-full gap-2">
              <InputRoot.wrapper classname="w-1/2">
                <InputRoot.label className="text-lg" htmlFor="enterprise">
                  Empresa
                </InputRoot.label>
                <InputRoot.singleInput
                  id="enterprise"
                  value={isExperience.enterprise}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setIsExperience({
                      ...isExperience,
                      enterprise: e.target.value,
                    })
                  }
                  name="experience"
                  className="w-full"
                />
              </InputRoot.wrapper>
              <InputRoot.wrapper classname="w-1/2">
                <InputRoot.label className="text-lg" htmlFor="position">
                  Cargo
                </InputRoot.label>
                <InputRoot.singleInput
                  id="position"
                  value={isExperience.position}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setIsExperience({
                      ...isExperience,
                      position: e.target.value,
                    })
                  }
                  name="experience"
                  className="w-full"
                />
              </InputRoot.wrapper>
            </div>
            <div className="flex w-full gap-2">
              <InputRoot.wrapper classname="w-1/2">
                <InputRoot.label className="text-lg" htmlFor="startDate1">
                  Data de Inicio
                </InputRoot.label>
                <InputRoot.singleInput
                  id="startDate"
                  type="date"
                  value={isExperience.startDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setIsExperience({
                      ...isExperience,
                      startDate: e.target.value,
                    })
                  }
                  name="experience"
                  className="w-full"
                />
              </InputRoot.wrapper>
              <InputRoot.wrapper classname="w-1/2">
                <InputRoot.label className="text-lg" htmlFor="endDate">
                  Data de Termino
                </InputRoot.label>
                <InputRoot.singleInput
                  id="endDate"
                  type="date"
                  value={isExperience.endDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setIsExperience({
                      ...isExperience,
                      endDate: e.target.value,
                    })
                  }
                  name="experience"
                  className="w-full"
                />
              </InputRoot.wrapper>
            </div>
            <div className="flex w-full justify-center pt-2">
              <Button
                className="w-fit p-6 text-lg bg-violet-600 hover:bg-violet-700 hover:scale-105 transition-all 0.2s ease-in-out"
                onClick={handleExperience}
              >
                Adicionar Experiencia
              </Button>
            </div>
          </FormRoot.container>
        </fieldset>

        <fieldset className="flex flex-col gap-5 border-2 rounded-md border-blue-900 p-4">
          <legend className="text-2xl capitalize">Idiomas</legend>

          <FormRoot.container className="flex-col">
            <div className="flex w-full gap-2">
              <SelectRoot.wrapper classname="w-full">
                <SelectRoot.label className="text-lg"> Idioma</SelectRoot.label>
                <SelectRoot.root
                  name="language"
                  value={isLanguage.language}
                  onValueChange={(event: string) =>
                    setIsLanguage({ ...isLanguage, language: event })
                  }
                >
                  <SelectRoot.trigger placeholder="Idioma" className="w-full" />
                  <SelectRoot.content className="bg-blue-600 border-blue-700 text-white">
                    {LanguageList.map((item, index) => (
                      <SelectionLanguageItem
                        key={index}
                        content={item.name}
                        value={item.name}
                      />
                    ))}
                  </SelectRoot.content>
                </SelectRoot.root>
              </SelectRoot.wrapper>
              <SelectRoot.wrapper classname="w-full">
                <SelectRoot.label className="text-lg">Nível</SelectRoot.label>
                <SelectRoot.root
                  name="level"
                  value={isLanguage.level}
                  onValueChange={(event: string) =>
                    setIsLanguage({ ...isLanguage, level: event })
                  }
                >
                  <SelectRoot.trigger placeholder="Nível" className="w-full" />
                  <SelectRoot.content className="bg-blue-600 border-blue-700 text-white">
                    {LevelList.map((item, index) => (
                      <SelectionLanguageItem
                        key={index}
                        content={item.name}
                        value={item.name}
                      />
                    ))}
                  </SelectRoot.content>
                </SelectRoot.root>
              </SelectRoot.wrapper>
            </div>
            <div className="flex w-full justify-center pt-2">
              <Button
                className="w-fit p-6 text-lg bg-violet-600 hover:bg-violet-700 hover:scale-105 transition-all 0.2s ease-in-out"
                onClick={handleLanguage}
              >
                Adicionar Idioma
              </Button>
            </div>
          </FormRoot.container>
        </fieldset>
        <FormRoot.container className="justify-center items-center w-full">
          <Button
            className="p-10 text-2xl bg-emerald-500 hover:bg-emerald-600 hover:scale-105 transition-all 0.2s ease-in-out"
            onClick={generateResume}
          >
            Gerar Curriculo{" "}
          </Button>
          <Button className="p-10 text-2xl bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all 0.2s ease-in-out">
            Visualizar Preview{" "}
          </Button>
        </FormRoot.container>
      </FormRoot.root>
      <ResumeSection formData={formData} />
    </section>
  );
};
