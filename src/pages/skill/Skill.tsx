import { useState } from "react";
import { Category } from "./skill.types";
import type { Skill } from "./skill.types";
import { skills, skillCategories } from "./skill.data";

function Skill() {
  const [activeCategory, setActiveCategory] = useState<Category>("frontend");
  const [categoryActivityBox, setCategoryActivityBox] = useState({
    top: 0,
    left: 0,
  });

  const categoryHandler = (e: React.MouseEvent<HTMLDivElement>, category: Category) => {
    e.preventDefault();

    setCategoryActivityBox({
      top: e.currentTarget.offsetTop,
      left: e.currentTarget.offsetLeft,
    });

    setActiveCategory(category);
  }

  return (
    <div className="flex flex-col w-full h-full text-white pt-10 overflow-y-auto">
      <div className="relative flex flex-wrap bg-[#222] rounded-lg text-white">
        <div className="w-1/3 h-15 absolute bg-[#6AA4FF] rounded-lg transition-all duration-300" style={{
          top: categoryActivityBox.top,
          left: categoryActivityBox.left,
        }}></div>
        {skillCategories.map((category, index) => (
          <div className="w-1/3 h-15 z-10" key={index}>
            <div className="flex h-full justify-center items-center cursor-pointer" onClick={(e) => categoryHandler(e, category.category)}>
              <span className="text-sm font-bold">{category.name}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 pt-10">
        {skills[activeCategory].map((skill: Skill, index: number) => (
          <div className="flex flex-col gap-4 bg-[#333] rounded-md py-4 pr-10" key={index}>
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-2 min-w-30 rounded-md">
                <skill.icon className="text-white" size={40} />
                <span className="text-sm font-bold">{skill.name}</span>
              </div>
              <div className="w-full flex flex-col gap-3">
                <div className="flex w-full h-3 bg-white rounded-md">
                  <div 
                    className="h-full bg-[#6AA4FF] rounded-md"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag: string, index: number) => (
                    <span className="text-xs bg-white rounded-md px-2 py-1 text-black" key={index}># {tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;