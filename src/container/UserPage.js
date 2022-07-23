import React, { useEffect, useState } from 'react';
import UserInfo from '../component/UserInfo';
import Navbar from '../component/Navbar';
import Tabs from '../component/Tabs';
import Repositories from '../component/Repositories';
import {getUserData, getUserRepo} from "../api/Api";
import { matchPath } from 'react-router-dom';
import Loading from '../component/Loading';

const UserPage = ({match}) =>{

    const[user,setUser] = useState();
    const[repos,setRepos] = useState([]);

    const userNameParams = match.params.userName;

    useEffect(()=>{
      fetchUser();
      fetchRepos();
    },[])

    async function fetchUser(){
        const{data} = await getUserData(userNameParams)
        setUser(data);
    }

    async function fetchRepos(){
        const{data} = await getUserRepo(userNameParams)
        setRepos(data);
    }
    return(
        <>
           {user ? (
            <>
            <Navbar user={user}/>
            <div className="container">
            <UserInfo user={user}/>
            <Tabs repos={repos} user={user}/>
            <Repositories repos={repos} user={user}/>
            </div>
            </>
           ):(
            <Loading/>
           ) }
        </>
        
    )
}
export default UserPage;