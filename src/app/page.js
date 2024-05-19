"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import dynamic from 'next/dynamic'





export default function Home() {


  useEffect(() => {
    console.log("useEffect");
  }
  , []);


 



  
  return (
    <main className={styles.main}>

      <h1>נתוני כלי רכב פעילים</h1>

      <iframe title="נתוני כלי רכב פעילים"  src="https://app.powerbi.com/reportEmbed?reportId=6216abd4-8c32-411f-b231-a1e333fadaac&autoAuth=true&embeddedDemo=true" frameborder="0" allowFullScreen="true"></iframe>

      <h1>על מנת לראות את הנתונים אנא התחבר לחשבון מיקרוסופט</h1>
          

     
         </main>
  );
}
