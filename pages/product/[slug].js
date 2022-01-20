import React from 'react';
import {useRouter} from "next/router";
import data from "../../utils/data";
import Layout from "../../components/Layout";
import {Link} from "@mui/material";
import NextLink from "next/link";
import useStlyes from "../../utils/styles";
import {Grid} from "@mui/material";
import Image from "next/image";
import {List, ListItem, Typography, Card, Button} from "@mui/material";

const Slug = ({product}) => {

    const classes = useStlyes();

    return (

        product ?
            (
                <Layout title={product?.name}>
                    <div className={classes.section}>
                        <NextLink href={"/"} passHref>
                            <Link>back to products</Link>
                        </NextLink>
                    </div>
                    <Grid container spacing={1}>
                        <Grid item md={6} xs={12}>
                            <Image src={product.image} alt={product.name} layout={"responsive"} width={640} height={640}></Image>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <List>
                                <ListItem>
                                    Category: {product.category}
                                </ListItem>
                                <ListItem>
                                    Brand: {product.brand}
                                </ListItem>
                                <ListItem>
                                    Rating: {product.rating} stars ({product.numReviews} reviews)
                                </ListItem>
                                <ListItem>
                                    Description:
                                    <Typography>
                                        {product.description}
                                    </Typography>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Card>
                                <List>
                                    <ListItem>
                                        <Grid container>
                                            <Grid item xs={6}><Typography>Price</Typography></Grid>
                                            <Grid item xs={6}><Typography>${product.price}</Typography></Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={6}><Typography>Status</Typography></Grid>
                                            <Grid item xs={6}><Typography>${product.countInStock>0? 'In stock' : 'Unavailable'}</Typography></Grid>
                                        </Grid>
                                    </ListItem>
                                    <ListItem>
                                        <Button fullWidth variant={"contained"} color={"primary"}>
                                            Add to cart
                                        </Button>
                                    </ListItem>
                                </List>
                            </Card>
                        </Grid>
                    </Grid>
                </Layout>
            )
            : (
                <Layout title={product?.name}>
                    <div>
                        <h1>404 Not Found</h1>
                    </div>
                </Layout>
            )


    );
};

export const getStaticPaths = async () => {

    const paths = data.products.map(product => ({params: {slug: product.slug}}))

    return {
        paths,
        fallback: 'blocking'
    }

}

export const getStaticProps = async (context) => {

    const {slug} = context.params;

    const product = data.products.find(product => product.slug == slug) ?? null;

    return {
        props: {
            product
        }
    }
}

export default Slug;
