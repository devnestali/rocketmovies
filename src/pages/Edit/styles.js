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
                width: 0.8rem;
            }
    
            .wrapper::-webkit-scrollbar-thumb {
                background-color: ${({ theme }) => theme.COLORS.PINK_800};
                border-radius: 8rem;
            }
    
            h1 {
                font-weight: 500;
                font-size: 3.6rem;
                line-height: 4.7rem;
    
                margin: 2.4rem 0 4rem;
            }
        }

`;

export const Inputs = styled.div`
    display: flex;
    align-items: center;
    gap: 5.6rem;
`;

export const Textarea = styled.textarea`
    width: 100%;
    height: 27.5rem;

    margin-top: 4rem;

    background-color: ${({ theme }) => theme.COLORS.BLACK_700};

    border: none;
    outline: none;
    resize: none;

    border-radius: 1rem;

    padding: 1.6rem;
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 5.6rem;

    > button {
        width: 100%;
    }
`;