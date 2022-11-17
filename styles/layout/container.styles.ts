import { css } from "@emotion/react";

export const container = css`
  display: grid;
  grid-template-columns: 1fr min(1080px, 100% - 20px * 2) 1fr;

  & > * {
    grid-column: 2;
  }
`;
