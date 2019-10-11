import React, { useState } from "react"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import { makeStyles } from "@material-ui/core"
import { fade } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import { Index } from "elasticlunr"
import Link from "./Link"
import MenuItem from "@material-ui/core/MenuItem"
import Downshift from "downshift"
import Paper from "@material-ui/core/Paper"


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
  root: {
    flexGrow: 1,
    height: `auto`,
  },
  container: {
    flexGrow: 1,
    position: "relative",
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  divider: {
    height: theme.spacing(2),
  },
  resultPanel: {
    marginTop: 38,
  },
}))

const SearchBar = () => {
  const classes = useStyles()
  // for search
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
    setResult(index.search(query, { expand: true })
      .map(({ ref }) => index.documentStore.getDoc(ref)))
    console.log(`result:`, result)
  }

  // for ui

  const renderInput = inputProps => {
    const { InputProps, classes, value } = inputProps
    return (
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search", ...InputProps }}
        value={value}
        onChange={search}
        margin="dense"
        style={{ float: `right` }}
      />
    )
  }

  const renderResult = resultProps => {
    console.log("triggered")
    const { page, index, itemProps, highlightedIndex, selectedItem } = resultProps
    console.log(page)
    const isHighlighted = highlightedIndex === index
    const isSelected = (selectedItem || "").indexOf(page) > -1
    console.log(page)

    return (
      <MenuItem
        {...itemProps}
        key={page.id}
        selected={isHighlighted}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400,
        }}
      >
        <Link to={`/blog/${page.slug}/`}>{page.title}</Link>
      </MenuItem>
    )
  }


  return (
    <div className={classes.search} style={{ fontSize: `1rem` }}>
      <div className={classes.searchIcon}>
        <SearchIcon/>
      </div>

      <div className={classes.root}>
        <Downshift id="downshift-simple">
          {({
              getInputProps,
              getItemProps,
              getLabelProps,
              getMenuProps,
              highlightedIndex,
              isOpen,
              selectedItem,
            }) => {
            const { onBlur, onFocus, ...inputProps } = getInputProps({
              placeholder: "Search...",
            })

            return (
              <div className={classes.container}>
                {renderInput({
                  classes,
                  label: "Search",
                  InputLabelProps: getLabelProps({ shrink: true }),
                  InputProps: { onBlur, onFocus },
                  value: query,
                  inputProps,
                })}

                <div {...getMenuProps()}>
                  {!isOpen ? (
                    <Paper className={classes.paper} square style={{ marginTop: 38 }}>
                      {result.map((page, index) =>
                        renderResult({
                          page,
                          index,
                          itemProps: getItemProps({ item: page.title }),
                          highlightedIndex,
                          selectedItem,
                        }),
                      )}
                    </Paper>
                  ) : null}
                </div>
              </div>
            )
          }}
        </Downshift>
        <div className={classes.divider}/>
      </div>
    </div>
  )
}

export default SearchBar
