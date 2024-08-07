import { Avatar, Container, Rating } from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button, ButtonGroup, Divider, Grid, IconButton, MenuItem, Paper, Snackbar, Stack, Table, TableBody, TableContainer, TableHead, TablePagination, Typography } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { BarChart } from '@mui/x-charts/BarChart';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LockIcon from '@mui/icons-material/Lock';
import VaccinesIcon from '@mui/icons-material/Vaccines';


const theme = createTheme();

const data = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
];

const size = {
    width: 200,
    height: 80,
};

//bar chart 
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];
// bar chart end
const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }) {
    const { height, top, width, left } = useDrawingArea()
    return (
        <StyledText x={left + width / 2} y={top + height / 2.5} fontWeight="bolder" fontFamily="Tahoma, Verdana, sans-serif">
            {children}
        </StyledText>
    );
}
//table
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Wade warren', 159, 6.0, "Delivered"),
    createData('Jane Cooper', 237, 9.0, "Delivered"),
    createData('Guy Hawkins', 262, 16.0, "Cancelled"),
    createData('Kristin Waston', 305, 3.7, "Pending"),

];



const Dashboard = () => {
    const [value, setValue] = React.useState(2);
    const [value1, setValue1] = React.useState(5);
    return (
        <>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <Rating
                name="simple-controlled"
                value={value1}
                onChange={(event, newValue) => {
                    setValue1(newValue);
                }}
            />
            <ThemeProvider theme={theme}>
                <Container component="main">
                    <Grid container spacing={1} sx={{ pt: 9, justifyContent: "space-evenly" }}>
                        <Grid item md={12} xs={12}>
                            <Typography variant="h6" sx={{ marginLeft: "50px", fontWeight: "bold", fontSize: "15px" }}>Dashboard</Typography>
                        </Grid>
                        <Grid item xs={1.3}>
                            <Card className='card'>
                                <IconButton>
                                    <ShoppingCartIcon color='info'/>
                                </IconButton>
                                <br />
                                <span className='textinput'>Total Orders</span>
                                <br />
                                <span className='noinput'>70</span>
                            </Card>
                        </Grid>
                        <Grid item xs={1.3}>
                            <Card className='card'>
                                <IconButton>
                                    <LockIcon color='success' />
                                </IconButton>
                                <br />
                                <span className='textinput'>Total Delivered</span>
                                <br />
                                <span className='noinput'>70</span>
                            </Card>
                        </Grid>
                        <Grid item xs={1.3}>
                            <Card className='card'>
                                <IconButton>
                                    <LockIcon color='error' />
                                </IconButton>
                                <br />
                                <span className='textinput'>Total Cancelled</span>
                                <br />
                                <span className='noinput'>05</span>
                            </Card>
                        </Grid>
                        <Grid item xs={1.3}>
                            <Card className='card'>
                                <IconButton>
                                    <VaccinesIcon color='success' />
                                </IconButton>
                                <br />
                                <span className='textinput'>Total Revenue</span>
                                <br />
                                <span className='noinput'>$12K</span>
                            </Card>
                        </Grid>
                        <Grid item xs={5}>
                            <Card className='card'>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <span className='textinput'>Net Profit</span>
                                        <br />
                                        <span className='noinput'>$ 6745.25</span>
                                        <br />
                                        <IconButton>
                                            <ArrowDropUpIcon />
                                        </IconButton>
                                        <span style={{ fontSize: "10px", fontWeight: "bold" }}>3 %</span>
                                    </Grid>

                                    <Grid item xs={5}>
                                        <PieChart series={[{ data, innerRadius: 41 }]} {...size} slotProps={{
                                            legend: { hidden: true },
                                        }}>
                                            <PieCenterLabel>
                                                70%
                                                <br />
                                            </PieCenterLabel>
                                        </PieChart>
                                        {/* <span style={{fontSize:"5px"}}>The values here has been rounded off</span> */}
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>

                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Typography variant="h6" sx={{ marginLeft: "50px", fontWeight: "bold", fontSize: "13px", marginTop:"10px" }}>Activity</Typography>
                    </Grid>
                    <Grid container spacing={1} sx={{ justifyContent: "space-evenly" }}>
                        <Grid item xs={6}>
                            <BarChart
                                width={650}
                                height={250}
                                series={[
                                    { data: pData, label: 'pv', id: 'pvId' },
                                    { data: uData, label: 'uv', id: 'uvId' },
                                ]}
                                xAxis={[{ data: xLabels, scaleType: 'band' }]}
                            />
                        </Grid>
                        <Grid item xs={5} sx={{ marginTop: "10px" }}>
                            <Card className='card' sx={{ minHeight: "200px" }}>
                                <Grid container spacing={1} >
                                    <Grid item xs={1.2}>
                                        <IconButton>
                                            <GpsFixedIcon  color='error'/>
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{ marginTop: "7px", fontSize: "20px" }}>Goals</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton>
                                            <ArrowForwardIosIcon/>
                                        </IconButton>
                                    </Grid>


                                    <Grid item xs={1.2}>
                                        <IconButton>
                                            <GpsFixedIcon color='primary' />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{ marginTop: "7px", fontSize: "20px" }}>Popular Dishes</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton>
                                            <ArrowForwardIosIcon />
                                        </IconButton>
                                    </Grid>

                                    <Grid item xs={1.2}>
                                        <IconButton>
                                            <GpsFixedIcon color='success'/>
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{ marginTop: "7px", fontSize: "20px" }}>Menu</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton>
                                            <ArrowForwardIosIcon />
                                        </IconButton>
                                    </Grid>

                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Typography variant="h6" sx={{ marginLeft: "50px", fontWeight: "bold", fontSize: "13px" }}>Recent Activity</Typography>
                    </Grid>

                    <Grid container spacing={1} sx={{ justifyContent: "space-evenly" }}>
                        <Grid item xs={6} sx={{ marginBottom: "20px" }}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Customer</TableCell>
                                            <TableCell align="left">Order No</TableCell>
                                            <TableCell align="left">Amount</TableCell>
                                            <TableCell align="left">Status</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >

                                                <TableCell align="left">{row.name}</TableCell>
                                                <TableCell align="left">{row.calories}</TableCell>
                                                <TableCell align="left">{row.fat}</TableCell>


                                                {row.carbs === "Cancelled" || row.carbs === "Pending" ?
                                                    <TableCell>  <Button sx={{ fontSize: "8px" }} variant='contained' color="error" type="submit">Cancelled</Button> </TableCell>
                                                    : <TableCell align="left">
                                                        <Button variant='contained' sx={{ fontSize: "8px" }}>  {row.carbs} </Button>
                                                    </TableCell>
                                                }


                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Grid>
                        <Grid item xs={5} sx={{ marginBottom: "20px" }}>
                            <Card className='card' sx={{ minHeight: "200px" }}>
                                <span>Customer Feedback</span>
                                <Grid container sx={{ marginTop: "5px" }} >
                                    <Grid item xs={2}>
                                        <Avatar alt="Remy Sharp" src="../../public/logo192.png" />
                                    
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{ marginTop: "7px", fontSize: "18px" }}>Jenny Wilson</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Rating name="read-only" value={value} readOnly />
                                    </Grid>
                                    <span style={{ fontSize: "12px" }}>
                                        The food was excellent and so was the service. I had the mushroom ristto with scallos which was awesome.I had a burger over greens (gluten-free) which was so good They were very consience about gluten allergies
                                    </span>
                                </Grid>
                                <Grid container sx={{ marginTop: "5px" }} >
                                    <Grid item xs={2}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{ marginTop: "7px", fontSize: "18px" }}>Dianee Russell</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Rating name="read-only" value={value1} readOnly />
                                    </Grid>
                                    <span style={{ fontSize: "12px" }}>
                                        We enjoyed the Eggs Benedict served on homemade focaccia bread and hot cofee. perfect service
                                    </span>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        </>
    );
}

export default Dashboard;