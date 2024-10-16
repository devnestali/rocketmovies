import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem 1fr;
    grid-template-areas: 
    "header"
    "content";

    @media (max-width: 768px) {
        grid-template-rows: 7rem 1fr;
    }

    > main {
        grid-area: content;
        
        width: 100%;

        padding: 6rem 0;

        overflow: hidden;

        @media (max-width: 768px) {
            padding: 3rem 0;
        }

        .wrapper {
            height: 100%;

            overflow-y: scroll;

            @media (max-width: 768px) {
                > a {
                    width: 100%;
                    justify-content: center;
                }

                text-align: center;
            }
        }

        .wrapper::-webkit-scrollbar {
            width: .8rem;
        }

        .wrapper::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.PINK_800};
            border-radius: 8rem;
        }

        h1 {
            font-size: 3.6rem;
            line-height: 4.6rem;
            font-weight: 500;

            margin: 2.4rem 0 4rem;
        }

        h2 {
            font-size: 2rem;
            line-height: 2.6rem;
            color: ${({ theme }) => theme.COLORS.GRAY_700};

            margin: 4rem 0 2.4rem;

            @media (max-width: 768px) {
                margin: 2rem 0 1.6rem;
                text-align: left;
            }
        }

        .itemsOfNote {
            width: 100%;
            background-color: ${({ theme }) => theme.COLORS.BLACK_900};

            padding: 1.6rem;

            border-radius: .8rem;

            margin-bottom: 4rem;

            display: flex;
            gap: 4rem;
            flex-wrap: wrap;

            @media (max-width: 768px) {
                gap: 1rem;
            }
        }
    }
`;

export const Inputs = styled.div`
    display: flex;
    gap: 5.6rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 27.5rem;

    margin-top: 4rem;
    background-color: ${({ theme }) => theme.COLORS.BLACK_700};
    
    border: none;
    outline: none;
    resize: none;

    border-radius: 1rem;
    padding: 1.7rem;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 5.6rem;

    > button {
        width: 100%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1.5rem;

        > button {
            margin-top: 0;
        }
    }
`;