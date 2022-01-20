import {makeStyles} from "@mui/styles";

const useStlyes = makeStyles({
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color : '#fff',
            marginLeft : 10
        }
    },
    main: {
        minHeight : '80vh'
    },
    footer: {
        textAlign: 'center'
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem'
    },
    grow: {
        flexGrow : 1
    },
    section: {
        marginTop : '10px',
        marginBottom : '10px'
    }
})

export default useStlyes;