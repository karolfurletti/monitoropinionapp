import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import ChatIcon from "@material-ui/icons/Chat"
import NoteIcon from "@material-ui/icons/Note"
import PollIcon from "@material-ui/icons/Poll"
import CompareIcon from "@material-ui/icons/Compare"
import PieChartIcon from "@material-ui/icons/PieChart"
import SearchIcon from "@material-ui/icons/Search"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import NotificationsIcon from "@material-ui/icons/Notifications"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
import Logo from "../../Assets/logo.png"
import { Grid } from "@material-ui/core"
import { Link } from "react-router-dom"
import "./index.css"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

export default function MiniDrawer(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const selectedIndex = props.option

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleSetNavigation = () => {

  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>


          <Grid container justify="flex-end">
            {/* <Grid item>
                <Typography variant="h6">{props.NavTitle}</Typography>
          </Grid> */}
            <Grid item>
              <IconButton color="inherit">
                <NotificationsIcon />
              </IconButton>
            </Grid>
            <Grid item>


              <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem className="menu-item-draw-titulo">Essencia do Sabor</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/dashboard/minhaconta" className="menu-item-draw">Minha
                  conta</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/dashboard/dadospessoais"
                          className="menu-item-draw">Dados pessoais</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/dashboard/fontes" className="menu-item-draw">Pagamentos
                  e faturas</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/dashboard/fontes"
                          className="menu-item-draw">Notificações</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/dashboard/fontes" className="menu-item-draw">Indique
                  um amigo</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/dashboard/fontes"
                          className="menu-item-draw">Logout</MenuItem>

              </Menu>


            </Grid>
          </Grid>

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <img src={Logo} alt="MonitorOpinion" className="LogoImg" />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button component={Link} to="/dashboard/inicio" onClick={handleSetNavigation}
                    selected={selectedIndex === 0}>
            <ListItemIcon><LibraryBooksIcon /> </ListItemIcon>
            <ListItemText primary="Visão Geral" />
          </ListItem>

          <ListItem button component={Link} to="/dashboard/analise" selected={selectedIndex === 1}>
            <ListItemIcon><PieChartIcon /> </ListItemIcon>
            <ListItemText primary="Análise" />
          </ListItem>

          <ListItem button component={Link} to="/dashboard/fontes" selected={selectedIndex === 2}>
            <ListItemIcon><SearchIcon /> </ListItemIcon>
            <ListItemText primary="Fontes" />
          </ListItem>

          <ListItem button component={Link} to="/dashboard/comentarios" selected={selectedIndex === 3}>
            <ListItemIcon><ChatIcon /> </ListItemIcon>
            <ListItemText primary="Comentários" />
          </ListItem>

          <ListItem button component={Link} to="/dashboard/relatorio" selected={selectedIndex === 4}>
            <ListItemIcon><NoteIcon /> </ListItemIcon>
            <ListItemText primary="Relatório" />
          </ListItem>

          {/* <ListItem button component={Link} to="/dashboard/infografico" selected={selectedIndex === 5}>
            <ListItemIcon><PollIcon /> </ListItemIcon>
            <ListItemText primary="Infográfico" />
          </ListItem> */}
          <ListItem button component="a" href="http://localhost:3000/dashboard/infografico" target="_blank">
            <ListItemIcon><PollIcon /> </ListItemIcon>
            <ListItemText primary="Infográfico" />
          </ListItem>


          <ListItem button component={Link} to="/dashboard/comparacao" selected={selectedIndex === 6}>
            <ListItemIcon><CompareIcon /> </ListItemIcon>
            <ListItemText primary="Comparação" className="ComparacaoTab" />
          </ListItem>

          {/* <ListItem button component={Link} to="/dashboard/configuracao" selected={selectedIndex === 7}>
            <ListItemIcon><SettingsIcon /> </ListItemIcon>
            <ListItemText primary="Configuração" className="ConfiguracaoTab"/>
          </ListItem> */}

        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  )
}
