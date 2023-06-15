

import { Typography, Box, styled } from '@mui/material'; 

import { navData } from '../../constant/data';

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflowX: 'hidden',   //as navbar needs more screen to its elements due to which there is a scrollbar produce horizontallyh for the complete screen so to remove that we use that
    //  overflowX: 'overlay',   //to give scrollbar on small screen
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

const NavBar = () => {
    return (
        <Component>
            {
                navData.map(temp => (
                    <Container>
                        <img src={temp.url} style={{  width: 64 }} />
                        <Text>{temp.text}</Text>
                    </Container>
                ))
            }
        </Component>
    )
}

export default NavBar;