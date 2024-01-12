import styled from "styled-components"

export const ResumeStyled = styled.section`
    .resumeContainer{
        font-size: 1.5rem;
        font-weight: 600;
    }

    .resumeContainer h2{
        font-size: 1.5rem;
        margin-bottom: var(--gap);
        color: var(--color-1);
    }

    @media(max-width: 1000px ){
        .resumeContainer{
            flex-direction: column;
        }
    }
`