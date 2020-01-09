import React, { useEffect } from 'react';
import logo from './logo.svg';
import {
    Card,
    CardContent,
    CardActions,
    CardActionArea,
    Typography,
    Button,
    Container
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './App.scss';

import { AppBar } from './components/AppBar/AppBar';
import AppArticle from './components/AppArticle/AppArticle';
import StoreView from './components/StoreDebugger/StoreDebugger';
import AppDrawer from './components/AppDrawer/AppDrawer';

const demotxt = `
# Hello World
This is test paragraph is in \`markdown\`
\`\`\`js
console.log('some string');
\`\`\`
`;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            paddingTop: theme.spacing(3)
        }
    })
);

const App: React.FC = () => {
    const classes = useStyles();
    return (
        <div className="App">
            <AppBar title="Paśko Pascal"></AppBar>
            <AppDrawer />
            <Container className={classes.container}>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="h4">
                                Hello on PaśkoPascal
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button color="primary">Lern more</Button>
                    </CardActions>
                </Card>

                <AppArticle txt={demotxt} />
                <StoreView />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </Container>
        </div>
    );
};

export default App;
