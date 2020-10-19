export const getLayouts = () => (state: any) =>
  Object.keys(state.layouts.layouts).map((id) => state.layouts.layouts[id]);

export const getLayout = (id: number) => (state: any) =>  state.layouts.layouts[id];
//FIXME: any types
