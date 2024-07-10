<script setup lang="ts">

</script>

<template>
<div id="mymenu" className="sidnav">
<div><img id="navlogo"  src="/src/images/logo.png" alt=""></img></div>
<div className="sidnav_separator" ><hr/></div>
<div className = "menucontent">
    <div id="Accueil" className="content_block"><p className="content_title"> <a className="content_title" href="/">Accueil </a></p></div>
    <div id="Association" className="content_block"><p className="content_title">L&#39association</p>
      <p  className="content_section" ><a className="content_txt" href="game">Présentation</a></p>
      <p className="content_section"><a className="content_txt">Histoire du club</a></p>
      <p className="content_section"><a className="content_txt">Membres</a></p>
    </div>
    <div id="Club" className="content_block"><p className="content_title">Le Club</p>
      <p  className="content_section" ><a className="content_txt" href="game">Règlement</a></p>
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