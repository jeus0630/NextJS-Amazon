import Head from "next/head";
import {AppBar, Container, Link, Toolbar, Typography} from "@mui/material";
import useStlyes from "../utils/styles";
import NextLink from "next/link";

const Layout = ({children}) => {
    const classes = useStlyes();
    console.log(classes);
    return (
        <div>
            <Head>
                <title>Next Amazona</title>
            </Head>
            <AppBar position={"static"} className={classes.navbar}>
                <Toolbar>
                    <NextLink href={"/"} passHref>
                        <Link>
                            <Typography className={classes.brand}>amazona</Typography>
                        </Link>
                    </NextLink>
                    <div className="classes.grow"></div>
                    <div>
                        <NextLink href={"/cart"} passHref>
                            <Link>Cart</Link>
                        </NextLink>
                        <NextLink href={"/login"} passHref>
                            <Link>login</Link>
                        </NextLink>
                    </div>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>
                    All rights reserved. Next Amazona.
                </Typography>
            </footer>
        </div>
    );
};

export default Layout;
