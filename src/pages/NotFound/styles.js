import styled from "styled-components";

export const Container = styled.div`
    max-width: 68rem;
    padding: 0 4rem;
    text-align: center;
    margin: 20vmin auto 0;

    > .title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        h1 {
            color: ${({ theme }) => theme.COLORS.PINK_800};
            font-size: 3rem;
            line-height: 3rem;
        }

        svg {
            font-size: 2.5rem;
            color: ${({ theme }) => theme.COLORS.PINK_800};
        }
    }

    > p {
        font-size: 1.5rem;
        margin: 1rem auto;
    }

    > button {
        font-size: 2rem;
    }
`;