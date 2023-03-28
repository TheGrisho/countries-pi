import { useState} from 'react'
import { useDispatch } from 'react-redux';
import {searchCountries} from "../../Actions/Actions.js"
import Styles from "../SearchBar/SearchBar.module.css"

export default function SearchBar() {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    
    function onSubmit(e){
        e.preventDefault();
        if (search.length === 0) return alert('Debe colocar un Pais');
        dispatch(searchCountries(search))
        setSearch('')
    }

    function onInputChange(e){
        e.preventDefault();
        setSearch(e.target.value)
   
    }

    return (<div className={Styles.SearchBar}>
        <form  onSubmit={onSubmit}>
            <input className={Styles.inputCountry} type="text" placeholder='Colocar pais...' onChange={onInputChange} value={search} />
            <input className={Styles.inputButton} type="submit" value="" />
        </form>
    </div>)
}
