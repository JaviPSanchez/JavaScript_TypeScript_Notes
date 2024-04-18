interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

//Solucion 1: We have to add the Global Type Promise<>
export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  //Solucion 2: const data: LukeSkywalker = {}
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });
  //Solucion 3: return data as LukeSkywalker
  return data;
};
