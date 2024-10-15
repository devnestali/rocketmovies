import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem 1fr;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        
        width: 100%;

        padding: 6rem 0;

        overflow: hidden;

        .wrapper {
            height: 100%;

            overflow-y: scroll;
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
        }
    }
`;

export const Inputs = styled.div`
    display: flex;
    gap: 5.6rem;
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
`;