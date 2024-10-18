import styled from "styled-components";

export const Container = styled.div`
    max-width: 68rem;
    padding: 0 4rem;
    text-align: center;
    margin: 40vmin auto 0;

    @media (max-width: 768px) {
        margin: 80vmin auto 0;
    }

    > .title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        h1 {
            color: ${({ theme }) => theme.COLORS.PINK_800};
            font-size: 3rem;
            line-height: 3rem;

            @media (max-width:768px) {
                font-size: 2.6rem;
            }
        }

        svg {
            font-size: 2.5rem;
            color: ${({ theme }) => theme.COLORS.PINK_800};
        }
    }

    > p {
        font-size: 1.5rem;
        margin: 1rem auto;

        @media (max-width:768px) {
            font-size: 1.8rem;
        }
    }

    > button {
        font-size: 2rem;
    }
`;