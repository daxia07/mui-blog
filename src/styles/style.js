import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  navBarLink: {
    color: 'black',
    textDecoration: 'none'
  },
  navLinkActive: {
    color: theme.palette.common.grey,
  },
  featureLink: {
    textDecoration: 'none',
    color: theme.palette.primary.light
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: props => props.featuredPostImg,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  icons: {
    fill: `lighten(#333, 40%)`,
    height: `24px`,
    marginRight: `.5rem`,
    transition: `.25s ease`,
    width: `24px`,
    '&:hover': {
      fill: `#ff4d4d`
    },
  },
  container: {
    width: `70%`,
    maxWidth: `100%`,
    position: `relative`,
    marginLeft: `auto`,
    marginRight: `auto`,
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 30,
    [theme.breakpoints.down('md')]: {
      width: `90%`
    },
  },
  blogContainer: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: `5px`,
    boxShadow: `hsla(0, 0, 0, .2) 0 4px 2px -2px`,
    fontWeight: 100,
    margin: `48px auto`,
    width: `100%`,
    '& a': {
      color: `#4d4dff`,
      textDecoration: `none`,
      transition: `.25s ease`,
      '&:hover': {
        borderColor: `#ff4d4d`,
        color: `#ff4d4d`
      }
    }
  },
  blogCover: {
    background: props => `url("https:${props.imgUrl}")`,
    backgroundSize: `cover!important`,
    borderRadius: `5px 5px 0 0`,
    height: `15rem`,
    boxShadow: `inset hsla(0, 0, 0, .2) 0 64px 64px 16px`
  },
  blogAuthor: {
    margin: `0 auto`,
    paddingTop: `.125rem`,
    width: `80%`,
  },
  blogAuthorName: {
    '& a': {
      color: `#fff`,
      fontWeight: 100,
    },
    '&::before': {
      background: props => `url("https:${props.avatar}")`,
      backgroundSize: `cover`,
      borderRadius: `50%`,
      content: '"  "',
      display: `inline-block`,
      height: `32px`,
      marginRight: `.5rem`,
      position: `relative`,
      top: `8px`,
      width: `32px`
    },
  },
  blogBody: {
    margin: `0 auto`,
    width: `80%`
  },
  blogTitle :{
    paddingTop: theme.spacing(2),
    '& a': {
      color: `#333`,
      fontWeight: 100
    }
  },
  blogSummary :{
    '& p': {
      color: `lighten(#333, 10%)`
    }
  },
  blogTags :{
    '& ul': {
      display: `flex`,
      flexDirection: `row`,
      flexWrap: `wrap`,
      listStyle: `none`,
      paddingLeft: 0
    },
    '& li + li': {
      marginLeft: `.5rem`
    },
    '& a': {
      border: `1px solid #999999`,
      borderRadius: `3px`,
      color: `#999999`,
      fontSize: `.75rem`,
      height: `1.5rem`,
      lineHeight: `1.5rem`,
      letterSpacing: `1px`,
      padding: `0 .5rem`,
      textAlign: `center`,
      textTransform: `uppercase`,
      whiteSpace: `nowrap`,
      width: `5rem`
    }
  },
  blogFooter: {
    borderTop: `1px solid lighten(#333, 70%)`,
    margin: `0 auto`,
    paddingBottom: `.125rem`,
    width: `80%`,
    '& ul': {
      listStyle: `none`,
      display: `flex`,
      flex: `row wrap`,
      justifyContent: `flex-end`,
      paddingLeft: 0
    },
    '& li:first-child': {
      marginRight: `auto`
    },
    '& li + li': {
      marginLeft: `.5rem`
    },
    '& li': {
      color: `#999999`,
      fontSize: `.75rem`,
      height: `1.5rem`,
      letterSpacing: `1px`,
      lineHeight: `1.5rem`,
      textAlign: `center`,
      textTransform: `uppercase`,
      position: `relative`,
      whiteSpace: `nowrap`,
      '& a': {
        color: `#999999`
      }
    }
  },
  publishedDate: {
    border: `1px solid #999999`,
    borderRadius: `3px`,
    padding: `0 .5rem`
  },
  comments: {
    marginRight: `1rem`
  },
  numero: {
    position: `relative`,
    top: `-0.5rem`
  },
  readMore: {
    textDecoration: 'none'
  },
  hiddenMdDown: {
    [theme.breakpoints.down('md')]: {
      position: `absolute`,
      transform: `translateY(100%)`,
      bottom: `-140px`,
      marginTop: 20
    }
  },
  bigAvatar: {
    margin: 10,
    width: 72,
    height: 72,
    verticalAlign: `middle`
  },
  authorDescription: {
    marginBottom: 5,
    marginTop: 5,
    fontSize: `0.95rem`,
    color: `rgba(0,0,0,.44)`,
    display: `block!important`
  },
  featuredImage: {
    position: `relative`,
    display: `block`,
    margin: `0 auto`,
    marginBottom: `1.5rem`,
    width: `100%`,
    height: `auto`,
    // objectFit: `contain`,
    maxHeight: `350px`
  },
  articlePost: {
    fontFamily: `Merriweather`,
    fontSize: `1.125rem`,
    fontHeight: 1.8,
    color: `#222222`,
    '& img': {
      display: `block`,
      margin: `0 auto`,
      marginBottom: `1.5rem`,
      width: `100%`,
      height: `auto`,
      // objectFit: `contain`,
      maxHeight: `350px`
    }
  },
  postCategory: {
    position: `absolute`,
    top: -75,
    left: -10,
    background: `#e74c3c`,
    padding: `10px 15px`,
    fontSize: 14,
    fontWeight: 600,
    textTransform: `uppercase`
  },
  mainHeading: {
    padding: `1rem 0`
  },
  row: {
    marginRight: theme.spacing(-2),
    marginLeft: theme.spacing(-2),
    [theme.breakpoints.up('md')]: {
      display: `flex`,
      flexWrap: `wrap`
    }
  },
  postTopMeta: {
    marginBottom: `2rem`
  },
  linkDark: {
    color: `rgba(0,0,0,.8)`,
    textDecoration: `none`
  },
  textCapitalize: {
    textTransform: `capitalize!important`
  },
  btn: {
    borderColor: `#754abc`,
    color: `#754abc`,
    marginLeft: 5,
    marginTop: -4,
    padding: `3px 10px`,
    textAlign: `center`,
    borderRadius: `999em`,
    fontSize: `0.85rem`,
    display: `inline-block`,
    fontWeight: 400,
    lineHeight: 1.25,
    whiteSpace: `nowrap`,
    verticalAlign: `middle`,
    userSelect: `none`,
    border: `1px solid transparent`
  },
  postTitle: {
    fontWeight: 700,
    marginBottom: `1rem`,
    color: `#111111`,
    fontSize: `2.5rem`,
    lineHeight: 1.1
  },
  postDate: {
    color: `rgba(0,0,0,.54)`,
    display: `inline-block`,
    fontFamily: `PT Sans`,
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 1.5
  },
  dot: {
    marginLeft: 3,
    marginRight: 3,
  },
  tags: {
    overflow: `hidden`,
    listStyle: 'none',
    padding: 0,
    margin: `0 0 20px`,
    '& a:before': {
      content: '""',
      position: `absolute`,
      left: -10,
      borderWidth: `10px 10px 10px 0`,
      borderStyle: `solid`,
      borderColor: `transparent #8e855a`
    },
    '& a:after': {
      content: '""',
      position: `absolute`,
      left: -2,
      top: 8,
      width: 3,
      height: 3,
      background: `#fff`,
      borderRadius: 5
    },
    '& li': {
      float: `left`,
      padding: 0,
      margin: `0 0 5px 20px`, /* make some space for the triangle */
      font: `12px/20px Arial, sans-serif`
    },
    "& a": {
      position:"relative",
      display:"block",
      padding:"0 8px",
      textDecoration:"none",
      color:"#fff",
      background:"#8e855a"
    },
  },
}));

export default useStyles