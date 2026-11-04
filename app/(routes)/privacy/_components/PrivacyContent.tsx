'use client'
import { Fragment } from "react";
// The same plain sheet as the press kit: one column of text on white.
import { PressKitPage, Sheet } from "../../presskit/styles";
import { useDictionary } from "@/app/_i18n/LocaleProvider";

const EMAIL = 'hello@hellbrosstudio.com';

// The studio's address, wherever the text names it, as a link to write to it.
const withEmail = (text: string) =>
  text.split(EMAIL).map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <a href={`mailto:${EMAIL}`}>{EMAIL}</a>}
      {part}
    </Fragment>
  ));

const PrivacyContent = () => {
  const p = useDictionary().privacy;
  return (
    <PressKitPage id="inicio" tabIndex={-1}>
      <Sheet>
        <h1>{p.title}</h1>
        <p className="lead">{p.updated}</p>
        <p>{p.intro}</p>
        {p.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((text) => <p key={text}>{withEmail(text)}</p>)}
            {section.items && (
              <ul>
                {section.items.map(({ label, text }) => (
                  <li key={label}>
                    <strong>{label}:</strong> {text}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </Sheet>
    </PressKitPage>
  );
};

export default PrivacyContent;
