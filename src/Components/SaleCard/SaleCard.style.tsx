import styled from "styled-components";

export const SaleCardStyled = styled.div`
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: var(--gap);
    margin-bottom: var(--gap-s);
    align-items: center;

    .saleCardLink{
        font-family: monospace;
        text-decoration: none;
        color: inherit;
    }

    .salePrice{
        justify-self: end;
    }
`