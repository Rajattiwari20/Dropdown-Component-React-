import React, { useState } from 'react';
import { Grid } from '@material-ui/core'

const Dropdown = () => {

    //items array
    const dropdownData = ["Yes", "Probably Not"]

    //state 
    const [dropdownVisibility, setDropdownVisibility] = useState(true);

    // set state on clicking menu item
    const handleChange = () => {
        if (dropdownVisibility) {
            setDropdownVisibility(false)

        }
    }


    return (
        <>
            {/* main  container*/}
            <Grid container md={4} sm={6} xs={12} className="container">
                <Grid item md={12} sm={12} xs={12}>
                    <Grid container direction="column" className="heading">
                        <Grid item >
                            <h2>Should you use a dropdown ?</h2>
                        </Grid>
                        {/* Dropdown container */}
                        <Grid container className="showMenu" direction="column">
                            {/* Select container */}
                            <Grid item >
                                <Grid container className="dropdown" md={4} sm={5} xs={5} >
                                    <Grid item  >
                                        <Grid container>
                                            <Grid item className="btn-container">
                                                <button className="dropbtn" onMouseEnter={() => setDropdownVisibility(true)} >Select</button>
                                                <img style={{ width: "20px" }} src="https://image.flaticon.com/icons/png/512/130/130907.png" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* Dropdown menu container */}
                            <Grid item style={{ marginLeft: "25%" }}>
                                <Grid md={6} sm={6} xs={6} >
                                    <Grid item className="dropdown-content">
                                        {
                                            dropdownVisibility &&

                                            dropdownData.map((item, index) => {
                                                return <a href="#" onClick={handleChange} > {item} </a>
                                            })
                                        }
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </>
    )
}


export default Dropdown;

