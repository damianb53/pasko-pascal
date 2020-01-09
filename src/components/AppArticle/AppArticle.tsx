import React from 'react';
import Markdown from 'react-markdown';
import { Prism } from 'react-syntax-highlighter';
// import * as style from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './AppArticle.scss';

const CodeBlock: React.FC<{
    language: string;
    value: React.Component;
}> = props => {
    return (
        <Prism language={props.language} style={vs}>
            {props.value}
        </Prism>
    );
};

const AppArticle: React.FC<{ txt: string }> = props => {
    return (
        <Markdown
            className="AppArticle"
            source={props.txt}
            renderers={{ code: CodeBlock }}
        ></Markdown>
    );
};

export default AppArticle;
