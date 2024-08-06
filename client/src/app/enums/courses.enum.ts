export enum CoursesEnum {
  Maths,
  PhysicalSciences,
  English,
  Custom,
  ComputerSciences,
}
export namespace CoursesEnum {
  export const all = [
    CoursesEnum.Maths,
    CoursesEnum.Custom,
    CoursesEnum.PhysicalSciences,
    CoursesEnum.English,
    CoursesEnum.ComputerSciences,
  ];

  export const title = new Map<CoursesEnum, string>([
    [CoursesEnum.Maths, 'Maths'],
    [CoursesEnum.PhysicalSciences, 'Sciences physiques'],
    [CoursesEnum.English, 'English'],
    [CoursesEnum.Custom, 'Du sur-mesure'],
    [CoursesEnum.ComputerSciences, 'Informatique'],
  ]);

  export const description = new Map<CoursesEnum, string>([
    [CoursesEnum.Maths, 'Des cours vulgariés, illustrés, des astuces en +✨'],
    [
      CoursesEnum.PhysicalSciences,
      'Redécouvres les loi et les propriétés de la physique et de la chimie.',
    ],
    [CoursesEnum.English, 'Des cas pratiques pour améliorer ton niveau.'],
    [
      CoursesEnum.Custom,
      "Un soutien personnalisé, une aide aux devoir, profites de l'expertise d'un tuteur",
    ],
    [
      CoursesEnum.ComputerSciences,
      '“Tu forgeras...après...benh...Tu deviendras forgeron“',
    ],
  ]);

  export const icons = new Map<CoursesEnum, string>([
    [CoursesEnum.Maths, '../assets/pics/maths.png'],
    [CoursesEnum.ComputerSciences, '../assets/pics/code.png'],
    [CoursesEnum.English, '../assets/pics/england-flag.png'],
    [CoursesEnum.PhysicalSciences, '../assets/pics/physics.png'],
    [CoursesEnum.PhysicalSciences, '../assets/pics/physics.png'],
    [CoursesEnum.Custom, '../assets/pics/ranking-badge.png'],
  ]);
}
