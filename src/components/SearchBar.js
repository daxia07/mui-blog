import React, { useState } from "react"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import { makeStyles } from "@material-ui/core"
import { fade } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import { Index } from "elasticlunr"
import Link from "./Link"


const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 10,
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
      },
    },
  },
}))

const SearchBar = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
      query SearchIndexQuery {
          siteSearchIndex {
              index
          }
      }
  `)
  let index
  const searchIndex = data.siteSearchIndex.index
  const [query, setQuery] = useState("")
  const [result, setResult] = useState([])
  const getOrCreateIndex = () => index ? index : Index.load(searchIndex)
  const search = evt => {
    const query = evt.target.value
    setQuery(query)
    index = getOrCreateIndex()
    console.log(index)
    console.log(index.search)
    setResult(index.search(query, {}))
    console.log(result)
    result.map(
      ({ ref }) => index.documentStore.getDoc(ref),
    )
  }
  return (
    <div className={classes.search} style={{ fontSize: `1rem` }}>
      <div className={classes.searchIcon}>
        <SearchIcon/>
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        value={query}
        onChange={search}
        margin="dense"
        style={{ float: `right` }}
      />
      {/* <ul>
        {result.map(page => (
          <li key={page.id}>
            <Link to={"/" + page.path}>{page.title}</Link>
            {": " + page.tags.join(`,`)}
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default SearchBar
