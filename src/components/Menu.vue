<script  lang="tsx" setup>
</script>

<template>
<div id="mymenu" className="sidnav">
<div><img id="navlogo"  src="/src/images/logo.png" alt=""></img></div>
<div className="sidnav_separator" ><hr/></div>
<div className = "menucontent">
    <div id="Accueil" className="content_block">
      <div className="content_title">
      <router-link to="/" >Accueil </router-link></div></div>
    <div id="Association" className="content_block"><p className="content_title">L&#39association</p>
      <p  className="content_section" >
        <router-link to="/presentation">Présentation</router-link></p>
      <p className="content_section">
        <router-link to="/histoire" >Histoire du club</router-link></p>
      <p className="content_section">
        <router-link to="/membres" >Membres</router-link></p>
    </div>
    <div id="Club" className="content_block"><p className="content_title">Le Club</p>
      <p  className="content_section" ><a className="content_txt" >Règlement</a></p>
      <p className="content_section"><a className="content_txt">Installations</a></p>
      <p className="content_section"><a className="content_txt">Inscriptions & tarifs</a></p>
      <p className="content_section"><a className="content_txt">Enseignements</a></p>
    </div>
    <div id="Rencontres" className="content_block"><p className="content_title">Les Rencontres</p>
      <p  className="content_section" ><a className="content_txt" href="game">Tournois</a></p>
      <p className="content_section"><a className="content_txt">Installations</a></p>
      <p className="content_section"><a className="content_txt">Inscriptions & tarifs</a></p>
      <p className="content_section"><a className="content_txt">Enseignements</a></p>
    </div>
</div>
</div>
</template>
