import styled from "styled-components";

export const HeaderStyled = styled.header`
    .dateRangeContainer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--gap);
    }

    @media(max-width: 1000px ){
       .dateRangeContainer{
            grid-template-columns: 1fr ;
        }

        .dateRangeContainer *:last-child{
            grid-row: 1;
        }
    }
`