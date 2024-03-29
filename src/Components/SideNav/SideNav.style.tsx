import styled from "styled-components";

export const SideNavStyled = styled.nav`
    li{
        display: flex;
        align-items: center;
        gap: var(--gap-s);
    }

    li a{
        text-decoration: none;
        flex: 1;
        font-size: 1.125rem;
        color: inherit;
        margin: .25rem 0;
        color: var(--color-1);
        padding: var(--gap-s) 0;
    }

    li span{
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        background: var(--color-4);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    li:hover span{
        background: var(--color-3);
    }

     @media(max-width: 700px ){
       ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
       }

       li a{
        font-size: .875rem;
       }
    }

`