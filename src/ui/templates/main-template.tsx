import { ReactNode } from "react";
import { styled } from "styled-components";

type Props = {
    header: React.ReactNode;
    backLink: ReactNode;
    title: ReactNode;
    body: ReactNode;
    children?: never;
};

export const MainTemplate: React.FC<Props> = ({header}) => {
    return (<MainTemplateWrapper>
        {header}
        <Main></Main>
    </MainTemplateWrapper>
    );
};

const MainTemplateWrapper = styled.div `
    width:100%;
    height:100%;

`;

    const Main = styled.main``

    const Footer = styled.footer ``