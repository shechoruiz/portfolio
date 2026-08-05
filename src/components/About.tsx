import { skills } from "../data/skills";
import type { SkillCategory } from "../types";
import { useLanguage } from "../i18n";
import SkillBadge from "./SkillBadge";

const CATEGORY_ORDER: SkillCategory[] = [
  "Frontend",
  "Backend & Cloud",
  "Tools",
];

function About() {
  const { t } = useLanguage();

  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    label: t.skills.categories[category],
    items: skills.filter((s) => s.category === category),
  }));

  return (
    <section
      className="bg-dark text-light"
      style={{ paddingTop: "6rem", paddingBottom: "4rem" }}
    >
      <div className="container">
        <h2 className="display-4 text-center mb-5" id="about-top">
          {t.about.title}
        </h2>

        <p
          className="lead text-center mx-auto mb-5 text-white-50"
          style={{ maxWidth: 720 }}
        >
          {t.about.bio}
        </p>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {grouped.map(
            (group) =>
              group.items.length > 0 && (
                <div key={group.category}>
                  <h5 className="fw-bold mb-3 text-light-emphasis">
                    {group.label}
                  </h5>
                  <div className="d-flex flex-wrap">
                    {group.items.map((skill) => (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        category={skill.category}
                      />
                    ))}
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
