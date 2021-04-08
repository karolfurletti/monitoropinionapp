import React, { useState } from "react"
import styles from "./Register.module.css"
import HeaderAuth from "../headerAuth"
import FormClient from "./formClient"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import FormCompany from "./formCompany"
import { serviceApi } from "../../../Services/api"
import { images } from "../../../utils/imagesSlideRegister"

function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 40
  },
  indicator: {
    backgroundColor: "#744D9C"
  }
}))

const Register = (props) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [dados, setDados] = useState(0)
  const [index, setIndex] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const nextTab = (form) => {
    handleChange(null, 1)
    setDados(form)
  }

  const saveRegister = (company) => {
    const formData = Object.assign(company, dados)
    serviceApi.post("/saveRegister", formData).then(response => {
      props.history.push({
        pathname: "/",
        toast: true
      })
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <div className={styles.left}>
          <img src={images[index].image.default} alt="" />
          <div className={styles.text}>{images[index].title}</div>
          <div className={styles.description}>{images[index].description}</div>

          <div className={styles.containerRounds}>
            {images.map((item, i) => (
              <div onClick={()=> setIndex(i)} key={i} className={ index === i ? styles.roundActive : styles.roundInactive} />
            ))}
          </div>

        </div>
      </div>
      <div className={styles.containerRight}>
        <HeaderAuth full={true} history={props.history} />
        <div className={styles.containerForm}>
          <div className={classes.root}>
            <AppBar className={styles.tabs} position="static">
              <Tabs classes={{ indicator: classes.indicator }} centered value={value} onChange={handleChange}
                    aria-label="simple tabs example">
                <Tab label="VOCÊ" {...a11yProps(0)} />
                <Tab disabled={!dados} label="EMPRESA" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}><FormClient dados={dados} nextTab={(form) => nextTab(form)} /></TabPanel>
            <TabPanel value={value} index={1}><FormCompany saveRegister={saveRegister} /> </TabPanel>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Register
