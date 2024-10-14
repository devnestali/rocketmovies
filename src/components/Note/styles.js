import styled from "styled-components";

export const Container = styled.button`
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.PINK_900};
    
    margin-bottom: 2.4rem;
    padding: 3.2rem;
    border-radius: 1.6rem;

    display: grid;
    text-align: left;

    > h3 {
        width: 100%;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 3.2rem;

        margin-bottom: .8rem;
    }

    > p {
        font-size: 1.6rem;
        line-height: 1.9rem;
        color: ${({ theme }) => theme.COLORS.GRAY_700};

        margin: 1.5rem 0;

        word-wrap: normal;
        overflow: hidden;
        text-overflow: ellipsis;

        height: 4rem;
    }

    > footer:last-child {
        align-self: end;
    }


`;