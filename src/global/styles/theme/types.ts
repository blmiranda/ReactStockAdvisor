type HexColor = `#${string}`;

export interface Theme {
  colors: {
    [key: string]: HexColor;
  };
}
